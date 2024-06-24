import {createBrowserRouter, RouterProvider, useSearchParams,} from "react-router-dom";
import React, {useEffect} from "react";
import Root from "./components/Root";
import CustomerDiscountSettings from "./routes/CustomerDiscountSettings";
import Home from "./routes/Home";
import Register from "./routes/Register";
import OrderNew from "./routes/OrderNew";
import OrderConfirm from "./routes/OrderConfirm";
import LoginPage from "./routes/Login";
import {useAppStore} from "./lib/store";
import BusyTimesReport from "./routes/BusyTimesReport";
import PayrollReport from "./routes/PayrollReport";
import CustomerDiscountsChangeLog from "./routes/CustomerDiscountsChangeLog";
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
				path: "/customer-discounts-log",
				element: <CustomerDiscountsChangeLog />,
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
			{
				path: '/reports/busy-times',
				element: <BusyTimesReport />
			},
			{
				path: '/reports/payroll',
				element: <PayrollReport />
			},
		]
	},
	{
		path: '/login',
		element: <LoginPage />
	}
]);
function App() {
	const searchParams = new URLSearchParams(window.location.search)
	const showScreenshotHeader = !!searchParams.get('screenshot');

	useEffect(() => {
		if (showScreenshotHeader) {
			document.querySelector('body')!.classList.add('screenshotting')
		}
	}, [showScreenshotHeader])

	return <>
		<div className={'screenshot-description'} id={'screenshot-info'}>
			<h3 id={'screenshot-title'}>This Is The Page Title</h3>
			<p id={'screenshot-description'}>On this page you can do things and do stuff and view things and stuff.</p>
		</div>
		<div className={'fake-browser'}>
			<div className={'window-name'}>
				Paulo's Pizza Palace Admin Dashboard - Firefox
			</div>
			<div className="browser-bar">
				<div className={'browser-bar-history'}>
					&lt;
				</div>
				<div className={'browser-bar-history'}>
					&gt;
				</div>
				<div className="lock-icon"></div>
				<input type="text" value="https://admin.paulospizzapal..."/>
				<div className="refresh-icon"></div>
			</div>
			<div className={'browser-viewport'}>
				<RouterProvider router={router}/>
			</div>
		</div>
	</>
}

export default App;
