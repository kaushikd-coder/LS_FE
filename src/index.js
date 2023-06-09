import React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store"

import { positions, transitions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"

const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transition: transitions.SCALE,
}

export const server = 'https://localstore.onrender.com'

const rootNode = document.getElementById("root")
ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>,
    rootNode
)
