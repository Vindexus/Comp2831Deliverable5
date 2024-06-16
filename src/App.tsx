import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import React from "react";
import Root from "./components/Root";
import CustomerDiscountSettings from "./routes/CustomerDiscountSettings";
import Home from "./routes/Home";
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
		]
	},
]);
function App() {
	return <RouterProvider router={router} />

}

export default App;
