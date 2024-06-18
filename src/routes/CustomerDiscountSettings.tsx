import React, {ReactNode, useEffect} from "react";
import {useAppStore} from "../lib/store";
import Pagination from "../components/Pagination";
import {pppSection} from "../lib/css";

function Section ({section}: {section: Section}) {
	const {title, enabled, discount, changed, children} = section
	return <section className={'card mb-2'}>
		<div className={'card-body'}>
			<h2 className={'card-title'}>{title}</h2>
			<div className={'form-check'}>
				<input checked={enabled} className={'form-check-input'} type={'checkbox'} />
				<label className={'form-check-label'}>
					{title} is enabled
				</label>
			</div>
			<div style={{opacity: enabled ? 100 : 0.25}}>
				<div className={'form-group d-flex align-items-center gap-2 mb-2'}>
					<label>Discount:</label>
					<input className={'form-control'} defaultValue={discount || 10} type={'number'} style={{width: '70px'}} />
					<span>
						%
						{discount === 100 && <span> (Free)</span>}
					</span>
				</div>
				{children}
			</div>
			<div className={'mt-2'}>
				<button className={'btn btn-' + (changed ? 'primary' : 'secondary')} disabled>Save</button>
			</div>
		</div>
	</section>
}

type Section = {
	title: string
	enabled: boolean
	children: ReactNode
	discount: number
	changed: boolean
}

export default function CustomerDiscountSettings () {
	const setCrumbs = useAppStore(state => state.setBreadcrumbs)
	useEffect(() => {
		setCrumbs(['Customer Loyalty Discount Settings'])
	}, [])
	const sections : Section[] = []

	sections.push({
		title: 'New Customer Discount',
		discount: 10,
		changed: false,
		enabled: true,
		children: <>
			<div>

			</div>
		</>
	})

	sections.push({
		title: 'Weekday Discount',
		discount: 5,
		enabled: true,
		changed: false,
		children: <>
			{['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => {
				return <div className="form-check">
					<input checked={index <= 1} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
					<label className="form-check-label" htmlFor="flexCheckChecked">
						{day}
					</label>
				</div>
			})}
		</>
	})

	sections.push({
		title: 'Free Delivery Radius',
		discount: 100,
		enabled: true,
		changed: false,
		children: <>
			<div className="form-group d-flex gap-2 align-items-center mb-2">
				<label>Radius:</label>
				<input style={{width: '80px'}} className="form-control" type="number" defaultValue={17} />
				<span>km</span>
			</div>
			<div style={{backgroundPosition: 'center center', backgroundImage: `url(https://i.imgur.com/ihMD2Op.png)`, height: '400px'}}>

			</div>
		</>
	})

	return (
		<div className={pppSection}>
			<h1>Customer Loyalty Program Settings</h1>
			{sections.map((section, index) => (
				<Section key={index} section={section} />
			))}
			<hr />
			<div className={'card'}>
				<div className={'card-body'}>
					<h3 className={'card-title'}>Changelog History</h3>
					<div className={'change-item'}>
						<div>
							<strong>John Smith</strong> updated the <strong>New Customer Discount</strong> settings
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
							<strong>John Smith</strong> updated the <strong>New Customer Discount</strong> settings
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
					<Pagination />
				</div>
			</div>
		</div>
	);
}
