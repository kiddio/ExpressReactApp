import * as React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app'
import {GlobalStyle} from './globalStyle'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.Fragment>
		<GlobalStyle />
		<App />
	</React.Fragment>
)
