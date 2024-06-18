import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import React from "react";
import Root from "./components/Root";
import CustomerDiscountSettings from "./routes/CustomerDiscountSettings";
import Home from "./routes/Home";
import Register from "./routes/Register";
import OrderNew from "./routes/OrderNew";
import OrderConfirm from "./routes/OrderConfirm";
import LoginPage from "./routes/Login";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: "/customer-discounts",
				element: <CustomerDiscountSettings />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/new-order',
				element: <OrderNew />
			},
			{
				path: '/confirm-order',
				element: <OrderConfirm />
			},
		]
	},
	{
		path: '/login',
		element: <LoginPage />
	}
]);
function App() {
	return <RouterProvider router={router} />

}

export default App;
