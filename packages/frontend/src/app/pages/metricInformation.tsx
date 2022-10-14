import * as React from 'react'
import styled from 'styled-components'

const SERVERURL = process.env.SERVERURL

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const TextArea = styled.textarea`
	max-width: 75%;
`

export const MetricInformation = () => {
	const bodyRef = React.useRef<HTMLTextAreaElement>()
	React.useEffect(() => {
		fetch(`${SERVERURL}/metrics`)
			.then((res) => {
				if (res.status === 403) {
					throw new Error('User is not authenticated')
				} else {
					return res.text()
				}
			})
			.then((text) => (bodyRef.current.innerHTML = text))
			.catch((e) => bodyRef.current.innerText = 'An error has occured...')
	})

	return (
		<Container>
			<p>Metrics:</p>
			<TextArea cols={500} rows={30} ref={bodyRef}></TextArea>
		</Container>
	)
}
