import {ReactNode, useState} from "react";

type Props = {
	defaultShow: boolean,
	children?: ReactNode,
	title: string
}
export default function Extender ({children, title, defaultShow} : Props) {
	const [show, setShow] = useState(defaultShow)
	return <div className="accordion mb-2">
		<div className="accordion-item">
			<h2 className="accordion-header">
				<button
					className={"accordion-button " + (show ? '': 'collapsed')}
					aria-expanded={show}
					onClick={() => setShow(!show)}
					type="button">
					{title}
				</button>
			</h2>
			<div className={"accordion-collapse collapse " + (show ? 'show' : '')}>
				<div className="accordion-body">
					{children}
				</div>
			</div>
		</div>
	</div>
}
