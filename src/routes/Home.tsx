import {Link} from "react-router-dom";
import React from "react";

export default function Home () {
	return <div>
		<div className={'d-flex justify-content-between mb-2 gap-2'}>
			<div className={'p-2 border rounded col-md-6 bg-light'}>
				<h2>Customer Account Setup</h2>
				<button type={'button'} className={'btn btn-secondary'}>Go</button>
			</div>
			<div className={'p-2 border rounded col-md-6 bg-light'}>
				<h2>Meal Order</h2>
				<button type={'button'} className={'btn btn-secondary'}>Go</button>
			</div>
		</div>
		<div className={'d-flex gap-2 flex-wrap'}>
			<Link to={'/register'}>Register new user</Link>
			<Link to={'/new-order'}>New order</Link>
		</div>
	</div>
}
