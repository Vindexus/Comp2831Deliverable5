import Form from "../components/forms/Form";
import InputFormGroup from "../components/forms/InputFormGroup";

export default function LoginPage () {
	return <div>
		<Form className={'col-md-4 mx-auto mt-4'} hideCancel submitLabel={'Login'}>
			<h4>Paulo's Pizza Palace</h4>
			<h1>Login</h1>
			<InputFormGroup label={'Employee number'} type={'email'} />
			<InputFormGroup label={'Password'} type={'password'} />
		</Form>
	</div>
}
