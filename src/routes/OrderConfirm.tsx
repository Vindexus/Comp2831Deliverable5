import Form from "../components/forms/Form";
import {useSetBreadcrumbs} from "../lib/store";
import {ReactNode} from "react";
import formatCents from "../lib/helpers";
import './OrderConfirm.css'

type Item = {
	label: string
	quantity: number
	notes?: string
	price: number
}

export default function OrderConfirm() {
	useSetBreadcrumbs(['Order #425', 'Confirm'])

	const items : Item[] = [
		{
			label: 'Medium Pepperoni',
			notes: 'No cheddar on left side',
			quantity: 1,
			price: 1299,
		},
		{
			label: 'Large Cheese',
			quantity: 2,
			price: 1329,
		},
		{
			label: '2L of Cuke',
			quantity: 2,
			price: 1329,
		},
	]

	const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

	return <Form submitLabel={'Submit Order'}>
		<div className={'order-summary'}>
			<div className={'fw-bold '}>Item</div>
			<div>Price</div>
			<div>Qty</div>
			<div>Subtotal</div>
			{items.map((item, idx) => {
				const bg = idx % 2 === 0 ? 'bg-secondary-subtle' : ''

				const pieces : ReactNode[] = [
					<div key={'label'} className={'fw-bold ' + bg}>{item.label}</div>,
					<div key={'price'} className={bg}>{formatCents(item.price)}</div>,
					<div key={'quantity'} className={bg}>x{item.quantity}</div>,
					<div key={'total'} className={bg}>{formatCents(item.price * item.quantity)}</div>,
				]

				if (item.notes) {
					pieces.push(<div key={'notes'} className={'notes fst-italic text-sm ps-4 ' + bg}>{item.notes}</div>)
				}
				return pieces
			})}
			<div className={'fs-3'}>
				<span className={'text-secondary fs-5'}>Total:</span> <span className={'fw-bold'}>{formatCents(total)}</span>
			</div>
		</div>
	</Form>
}
