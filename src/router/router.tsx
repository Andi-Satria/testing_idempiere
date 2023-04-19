import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Asset from "../pages/Asset"

const routes = createBrowserRouter([
    {
        path: '',
        element: <App/>
    },
    {
        path: 'assets',
        element: <Asset/>
    }
])

export {routes}