import {useAppStore} from "../lib/store";
import {ReactNode} from "react";
import {Link} from "react-router-dom";

export default function Breadcrumbs () {
	const crumbs = useAppStore(state => state.breadcrumbs)
	if (crumbs.length === 0) {
		return <></>
	}

	return <div className={'bg-secondary-subtle'}>
		<div className={'col-md-8 container mx-auto px-2 py-1'}>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb mb-0 fs-6">
					<li className={'breadcrumb-item'}><Link to={"/"}>Home</Link></li>
					{crumbs.map((crumb, i) => {
						let inner: ReactNode = <a href="#">{crumb}</a>

						if (crumbs.length - 1 === i) {
							inner = crumb
						}

						return <li key={i} className={"breadcrumb-item" + (i === crumbs.length - 1 ? ' active' : '')}>{inner}</li>
					})}
				</ol>
			</nav>
		</div>
	</div>

}
