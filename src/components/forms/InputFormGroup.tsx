import FormGroup, {FormGroupProps} from "./FormGroup";

export type Props = Omit<FormGroupProps, 'children'> & {
	placeholder?: string
	value?: string
	type?: 'text' | 'email' | 'password' | 'number'
}

export default function InputFormGroup (props: Props) {
	return <FormGroup {...props}>
		<input type={props.type || 'text'} defaultValue={props.value} className={'form-control'} placeholder={props.placeholder} />
	</FormGroup>
}
