const express = require('express')
const promMid = require('express-prometheus-middleware')
const cors = require('cors')
const HEADERAUTH = 'mysecrettoken'
const PORT = 3000
const app = express()

interface JsonResponse {
	epoch?: number
	error?: string
}

interface ReqType {
	headers: {
		authorization: string
	}
}

interface ResType {
	json: (body: JsonResponse) => void
	status: (number) => void
	set: (header: string, value: string) => void
}

// Wouldn't recommend this, is required to fix CORS errors on localhost.
app.use(cors())

app.use(
	promMid({
		metricsPath: '/metrics',
		collectDefaultMetrics: true,
		requestDurationBuckets: [0.1, 0.5, 1, 1.5],
		requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
		responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
		authenticate: req => req.headers.authorization === HEADERAUTH
	})
)

app.get('/time', (req: ReqType, res: ResType) => {
	if (req.headers.authorization == HEADERAUTH) {
		res.json({
			epoch: Math.floor(new Date().getTime() / 1000)
		})
	} else {
		res.status(403)
		res.json({
			error: 'Not Authorized'
		})
	}
})

app.listen(PORT, () => {
	console.log(`Express app listening on port ${PORT}`)
})
