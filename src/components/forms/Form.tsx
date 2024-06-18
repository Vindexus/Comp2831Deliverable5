import {FormEvent, ReactNode} from "react";

export type FormProps = {
	submitLabel?: string
	children: ReactNode
	onSubmit?: Function
}

export default function Form ({submitLabel, onSubmit, children} : FormProps) {
	function submitHandler (e: FormEvent) {
		e.preventDefault()
		if (typeof onSubmit === 'function') {
			onSubmit()
		}
	}

	return <div className={'card'}>
		<div className={'card-body'}>
			<form onSubmit={submitHandler}>
				{children}
				<div className={'mt-3'}>
					<button type={'submit'} className={'btn btn-primary'}>{submitLabel || 'Submit'}</button>
					<button type='button' className={'btn btn-secondary ms-2'}>Cancel</button>
				</div>
			</form>
		</div>
	</div>
}
