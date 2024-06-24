import {FormEvent, ReactNode} from "react";

export type FormProps = {
	submitLabel?: string
	children: ReactNode
	onSubmit?: Function
	className?: string
	hideCancel?: boolean
}

export default function Form ({submitLabel, onSubmit, children, className, hideCancel} : FormProps) {
	function submitHandler (e: FormEvent) {
		e.preventDefault()
		if (typeof onSubmit === 'function') {
			onSubmit()
		}
	}

	return <div className={'card ' + className}>
		<div className={'card-body'}>
			<form onSubmit={submitHandler}>
				{children}
				<div className={'mt-3 d-flex justify-content-center'}>
					<button type={'submit'} className={'btn btn-primary'}>{submitLabel || 'Submit'}</button>
					{!hideCancel && <button type='button' className={'btn btn-secondary ms-2'}>Cancel</button>}
				</div>
			</form>
		</div>
	</div>
}
