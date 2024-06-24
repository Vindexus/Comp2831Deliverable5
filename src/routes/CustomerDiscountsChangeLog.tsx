import Pagination from "../components/Pagination";
import React from "react";
import {pppSection} from "../lib/css";
import {useSetBreadcrumbs} from "../lib/store";

export default function CustomerDiscountsChangeLog () {
	useSetBreadcrumbs(['Customer Loyalty Discount Settings', 'Changelog History'])
	return <div className={pppSection}>
		<div className={'card'}>
			<div className={'card-body'}>
				<h3 className={'card-title'}>Changelog History</h3>
				<div className={'change-item'}>
					<div>
						<strong>Luigi Pezzente</strong> updated the <strong>New Customer Discount</strong> settings
						<small className={'ms-2 text-secondary'}>Jun 4th 2022, 8:46pm PST</small>
					</div>
					<div className={'p-2'}>
						Changed from disabled to <strong>enabled</strong>
						<br/>Discount changed from <span
						className={'text-decoration-line-through'}>8%</span> to <strong>10%</strong>
					</div>
				</div>
				<div className={'change-item'}>
					<div>
						<strong>Luigi Pezzente</strong> updated the <strong>New Customer Discount</strong> settings
						<small className={'ms-2 text-secondary'}>Mar 3rd 2022, 2:46pm PST</small>
					</div>
					<div className={'p-2'}>
						Changed from enabled to <strong>disabled</strong>
					</div>
				</div>
				<div className={'change-item'}>
					<div>
						<strong>Teresa Williams</strong> updated the <strong>Weekday Discount</strong> settings
						<small className={'ms-2 text-secondary'}>Feb 27th 2022, 1:42am PST</small>
					</div>
					<div className={'p-2'}>
						Discount changed from <span className={'text-decoration-line-through'}>20%</span> to <strong>5%</strong>
						<br/>Removed <span className={'text-decoration-line-through'}>Thursday</span>
						<br/>Added <strong>Monday</strong>
					</div>
				</div>
				<Pagination/>
			</div>
		</div>
	</div>
}
