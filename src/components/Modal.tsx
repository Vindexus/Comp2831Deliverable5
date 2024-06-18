import {ReactNode} from "react";

export type ModalProps = {
	body: ReactNode
	buttons?: ReactNode
	button?: string
	show?: boolean
	title?: string
	onClose?: Function
}

export default function Modal(props: ModalProps) {
	const {body, show, title} = props

	let buttons : ReactNode

	if (props.button) {
		buttons = <button className={'btn btn-primary'}>{props.button}</button>
	}
	else if (props.buttons) {
		buttons = props.buttons
	}

	function closeModal () {
		if (props.onClose) {
			props.onClose()
		}
	}

	return <>
		{show && (
			<div className={'modal-backdrop fade show'}>

			</div>
		)}
		<div className={'modal' + (show ? ' show d-block visible' : '')}>
			<div className={'modal-dialog modal-dialog-centered'}>
				<div className={'modal-content'}>
					<div className={'modal-header'}>
						{title && <h5 className={'modal-title'}>{title}</h5>}
						<button type={'button'} className={'btn-close'} onClick={closeModal}></button>
					</div>
					<div className={'modal-body'}>
						{body}
					</div>
					{buttons && <div className={'modal-footer justify-content-start'}>
						{buttons}
					</div>}
				</div>
			</div>
		</div>
	</>
}
