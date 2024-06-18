import FormGroup, {FormGroupProps} from "./FormGroup";

export type Props = Omit<FormGroupProps, 'children'> & {
	options: string[]
}

export default function RadioFormGroup (props: Props) {
	const options = props.options.map((opt, i) => {
		return <div className={'form-check form-check-inline'}>
			<input className={'form-check-input'} type={'radio'} name={props.label} value={opt}/>
			<label key={i} className={'form-check-label'}>{opt}</label>
		</div>
		})

		return <FormGroup {...props} error={undefined}>
			<div className={'d-flex align-items-center'}>
				{options}
				{props.error && <div className={'invalid-feedback d-block mt-0'}>{props.error}</div>}
			</div>
		</FormGroup>
}
