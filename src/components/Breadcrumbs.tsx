import {useAppStore} from "../lib/store";
import {ReactNode} from "react";
import {Link} from "react-router-dom";

export default function Breadcrumbs () {
	const crumbs = useAppStore(state => state.breadcrumbs)
	return <nav aria-label="breadcrumb">
		<ol className="breadcrumb">
			<li className={'breadcrumb-item'}><Link to={"/"}>Home</Link></li>
			{crumbs.map((crumb, i) => {
				let inner : ReactNode = <a href="#">{crumb}</a>
				let className = "breadcrumb-item"

				if (crumbs.length - 1 === i) {
					inner = crumb
					className += ' active'
				}

				return <li key={i} className={"breadcrumb-item" + (i === crumbs.length - 1 ? ' active' : '')}>{inner}</li>
			})}
		</ol>
	</nav>
}
