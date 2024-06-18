import Extender from "../components/Extender";
import React, {Fragment, useState} from "react";
import './OrderNew.css'
import Modal from "../components/Modal";
import Form from "../components/forms/Form";
import {useSetBreadcrumbs} from "../lib/store";

type PizzaOption = {
	name: string,
	size?: 's' | 'm' | 'l'
	hasNotes?: boolean
}

export default function OrderNew () {
	useSetBreadcrumbs(['Order #425'])
	const [showModal, setShowModal] = useState(true)
	const pizzas : PizzaOption[] = [
		{
			name: 'Margherita',
		},
		{
			name: 'Pepperoni',
			size: 'm',
			hasNotes: true,
		},
		{
			name: 'Hawaiian',
		},
		{
			name: 'Meat Lovers',
		},
		{
			name: 'Vegetarian',
		},
		{
			name: 'Cheese',
		}
	]

	return <div>
		<h1>New Order</h1>
		<Form submitLabel={'View Order'}>
			<Extender defaultShow={false} title={'Appetizers & Salads'} />
			<Extender defaultShow={true} title={'Classic Pizzas'}>
				<div className={'pizza-grid row-gap-2 column-gap-4'}>
					{pizzas.map((pizza) => {
						return <Fragment key={pizza.name}>
							<div className={'text-nowrap'}>{pizza.name}</div>
							<div className="btn-group" role="group" aria-label="Basic example">
								<button type="button" className="btn btn-sm btn-outline-secondary">S</button>
								<button type="button" className={"btn btn-sm btn-" + (pizza.size === 'm' ? 'success' : 'outline-secondary')}>M</button>
								<button type="button" className="btn btn-sm btn-outline-secondary">L</button>
							</div>
							<div>
								<button type="button" className={"btn btn-sm btn-" + (pizza.hasNotes ? 'primary' : 'outline-secondary')}>
									{pizza.hasNotes ? 'Edit' : 'Add'}&nbsp;Notes
								</button>
							</div>
							<div>
								<button type="button" disabled={!pizza.size} className={"btn btn-sm btn-" + (pizza.size ? 'success' : 'outline-secondary')}>Add</button>
							</div>
						</Fragment>
					})}
				</div>
			</Extender>
			<Extender defaultShow={false} title={'Special Pizzas'} />
			<Extender defaultShow={false} title={'Desserts'} />
			<Extender defaultShow={false} title={'Drinks'} />

		</Form>



		<Modal
			show={showModal}
			onClose={() => {
				setShowModal(false)
			}}
			body={<form>
				<textarea className={'form-control'} defaultValue={'None pizza with left beef'} />
			</form>}
			buttons={['Save', 'Cancel']}
			title={'Medium Pizza Notes'}
		/>
	</div>
}
