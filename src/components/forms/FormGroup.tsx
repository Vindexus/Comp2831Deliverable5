import {ReactNode} from "react";

export type FormGroupProps = {
	label: string,
	children: ReactNode
	error?: ReactNode
}

export default function FormGroup ({label, children, error} : FormGroupProps) {
	return <div className="form-group mb-2">
		<label className={'form-label d-block'}>{label}</label>
		{children}
		{error && <div className={'invalid-feedback d-block'}>{error}</div>}
	</div>
}
