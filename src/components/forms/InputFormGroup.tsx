import FormGroup, {FormGroupProps} from "./FormGroup";

export type Props = Omit<FormGroupProps, 'children'> & {
	placeholder?: string
	value?: string
}

export default function InputFormGroup (props: Props) {
	return <FormGroup {...props}>
		<input type={'text'} defaultValue={props.value} className={'form-control'} placeholder={props.placeholder} />
	</FormGroup>
}
