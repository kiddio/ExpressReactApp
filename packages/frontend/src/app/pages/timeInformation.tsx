import * as React from 'react'
import styled from 'styled-components'
// Probably don't have to do this on actual Unix systems
// WSL2 causes grief as the hosts don't line up.
const SERVERURL = process.env.SERVERURL

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const TimeInformation = () => {
	const [response, setResponse] = React.useState(null)
	const [loading, setLoading] = React.useState(true)
	const [counter, setCounter] = React.useState(0)

	const getEpoch = () => {
		fetch(`${SERVERURL}/time`)
			.then((res) => {
				if (res.status === 403) {
					throw new Error('User is not authenticated')
				} else {
					return res.json()
				}
			})
			.then((data) => setResponse(data.epoch))
			.catch((error) => {
				console.log('error has occured fetching', error)
				setResponse(null)
				setLoading(false)
			})
	}

	React.useEffect(() => {
		setCounter(0)
		const setTimerRef = setInterval(() => {
			if (response !== null) {
				setCounter((prevState) => prevState + 1)
			}
		}, 1000)
		return () => clearInterval(setTimerRef)
	}, [response])

	React.useEffect(() => {
		getEpoch()
		const getEpochInterval = setInterval(getEpoch, 30000)
		return () => {
			clearInterval(getEpochInterval)
		}
	}, [])

	if (!loading && !response) {
		return (
			<Container>
				<p>Failed to get Endpoint</p>
			</Container>
		)
	}

	if (loading && !response) {
		return (
			<Container>
				<p>Loading...</p>
			</Container>
		)
	}

	const writtenDate = new Date(0)
	writtenDate.setUTCSeconds(response)

	return (
		<Container>
			<p>Current Server Epoch Time:</p>
			<p>{response}</p>
			<p>{writtenDate.toTimeString()}</p>
			<p>(Updated Every 30 Seconds)</p>
			<br />
			<p>Time Difference</p>
			<p>{new Date(counter * 1000).toISOString().substring(11, 19)}</p>
			<p>(HH:MM:SS)</p>
		</Container>
	)
}
