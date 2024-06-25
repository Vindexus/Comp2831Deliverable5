import './PayrollReport.css'
import FormGroup from "../components/forms/FormGroup";
import {useSearchParams} from "react-router-dom";
import {pppSection} from "../lib/css";
import React from "react";
import {useSetBreadcrumbs} from "../lib/store";

function textToRowCells (text: string) : string[][] {
	return text.split('\n').map((line) => {
		return line.split('|')
	})
}

export default function PayrollReport () {
	useSetBreadcrumbs(['Reports', 'Payroll Report'])
	const [sp] = useSearchParams()
	const asAdmin = sp.has('asadmin')

	const payText = `Regular Pay|61.48|$35.24|$2,154.38|$15,840.68
Vacation Pay|-|-|$87.56|$593.20
Sta Holiday Pay|7.00|$17.24|$120.75|$680.58`
	const payRows = textToRowCells(payText)

	const taxText = `Income Tax|$243.38|$1,740.63
Employment Insurance|$27.45|$293.20
Canada Pension Plan|$108.75|$712.77`
	const taxRows = textToRowCells(taxText)

	return <div className={'col-md-6 mx-auto'}>
		<div className={pppSection + ' text-center fs-2 fw-bold text-nowrap'}>
			Welcome, {asAdmin ? 'Paulo' : 'Sophie Klassen'}!
		</div>
		<h1>Payroll Report</h1>
		<div className={'row'}>
			{asAdmin && <div className={'col-md-6'}>
				<FormGroup label={'Employee'}>
					<select className={'form-control'}>
						<option>Sophie Klassen</option>
						<option>Jeremy</option>
					</select>
				</FormGroup>
			</div>}
			<div className={'col-md-6' + (asAdmin ? '' : ' offset-3')}>
				<FormGroup label={'Payroll End Cycle Report'}>
					<select className={'form-control'}>
						<option>6/11/2024</option>
					</select>
				</FormGroup>
			</div>
		</div>
		<div className={'col-md-10 mx-auto bg-secondary-subtle p-2 mt-4 mb-4 fw-bold'}>
			Pay Cycle: 5/29/2024 - 6/11/2024
		</div>
		{asAdmin && <div className={'d-flex justify-content-center mb-4'}>
			<button type={'button'} className={'btn btn-secondary mx-4'}>Edit</button>
			<button type={'button'} className={'btn btn-secondary mx-4'}>Save</button>
		</div>}
		<div className={'rounded border-black border p-4 border-2'}>
			<div className={'d-flex justify-content-between fw-bold'}>
				<div>
					Total Hours: 61.48
				</div>
				<div>
					Pay Date: 6/11/2024
				</div>
			</div>
			<table className={'table mb-2'}>
				<thead>
				<tr>
					<th>PAY</th>
					<th>Hours</th>
					<th>Rate</th>
					<th className={'current'}>Current</th>
					<th className={'ytd'}>YTD</th>
				</tr>
				</thead>
				<tbody>
				{payRows.map((cells, idx) => {
					return <tr key={idx}>
						{cells.map((cell, k) => {
							return <td key={k}>{cell}</td>
						})}
					</tr>
				})}
				</tbody>
			</table>
			<table className={'table mt-4 mb-2'}>
				<thead>
				<tr>
					<th>TAXES</th>
					<th className={'current'}>Current</th>
					<th className={'ytd'}>YTD</th>
				</tr>
				</thead>
				<tbody>
				{taxRows.map((cells, idx) => {
					return <tr key={idx}>
						{cells.map((cell, k) => {
							return <td key={k}>{cell}</td>
						})}
					</tr>
				})}
				</tbody>
			</table>
			<div className={'bg-secondary-subtle p-2 summary'}>
				<table className={'table table bg-transparent'}>
					<thead>
					<tr>
						<th>SUMMARY</th>
						<th className={'current'}>Current</th>
						<th className={'ytd'}>YTD</th>
					</tr>
					</thead>
					<tbody>
					<tr className={'bg-transparent'}>
						<td>Total Pay</td>
						<td>$2,432.29</td>
						<td>$17,231.71</td>
					</tr>
					<tr>
						<td>Taxes</td>
						<td>$382.19</td>
						<td>$2,093.20</td>
					</tr>
					</tbody>
				</table>
				<div className={'border-black border-top border-2 p-2 fw-bold fs-4'}>Net Pay: $2053,10</div>
			</div>
		</div>
	</div>
}
