import * as React from 'react'
import styled from 'styled-components'

import {TimeInformation} from './timeInformation'
import {MetricInformation} from './metricInformation'

const Container = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	flex-direction: row;
	padding: 8px 16px;
	column-gap: 16px;
`

const InnerContainer = styled.div`
	max-width: 50%;
	max-height: 50%;
	display: flex;
	flex: 1 0 50%;
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
	padding: 8px 16px;
	margin: auto;
`

export const App = () => {
	return (
		<Container>
			<InnerContainer>
				<h1>Hello</h1>
				<TimeInformation />
			</InnerContainer>
			<InnerContainer>
				<h1>World</h1>
				<MetricInformation />
			</InnerContainer>
		</Container>
	)
}
