import {useSetBreadcrumbs} from "../lib/store";
import InputFormGroup from "../components/forms/InputFormGroup";
import React, {useState} from "react";
import RadioFormGroup from "../components/forms/RadioFormGroup";
import Form from "../components/forms/Form";
import Modal from "../components/Modal";

export default function Register () {
	const [showModal, setShowModal] = useState(true)
	useSetBreadcrumbs(['New Customer'])

	return <div className={''}>
		<h1>New Customer Registration</h1>
		<Form onSubmit={() => {
			setShowModal(true)
		}}
			submitLabel={'Register'}
		>
			<div className={'row mb-2'}>
				<div className={'col-md-6'}>
					<InputFormGroup label={'First Name'}/>
				</div>
				<div className={'col-md-6'}>
					<InputFormGroup label={'Last Name'}/>
				</div>
			</div>
			<div className={'row mb-2'}>
				<div className={'col-md-6'}>
					<InputFormGroup label={'Birthdate'} placeholder={'2003/04/15'} />
				</div>
				<div className={'col-md-6'}>
					<InputFormGroup label={'Phone Number'} placeholder={'(___)-___-____'} />
				</div>
			</div>
			<InputFormGroup
				label={'Email'}
				/*value='janedoe'
				error={'Please enter a valid email'}*/
			/>
			<RadioFormGroup
				label={'Would you like to receive promotional materials?'}
				options={['Yes', 'No']}
				/*error={'You must select one of these options'}*/
			/>
		</Form>
		<Modal
			show={showModal}
			onClose={() => {
				setShowModal(false)
			}}
			body={'Customer will receive an email to finish setting up their account and password.'}
			button={'Back to main menu'}
			title={'Customer registered successfully'}
		/>
	</div>
}
