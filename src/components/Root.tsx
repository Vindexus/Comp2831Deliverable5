import {Outlet} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

export default function Root() {

	return (
		<div className={'pb-4'}>
			<div id={'header-container'}>
				<header id={'header'} className={'col-md-8 mx-auto align-items-center justify-content-between d-flex p-2'}>
					<div className={'fw-bold'}>
						Paulo's Pizza Palace
					</div>
					<div className={'d-flex gap-4 align-items-center'}>
						<a href={'/'} className={'text-decoration-none'}>Home</a>
						<a href={'/'} className={'text-decoration-none'}>Settings</a>
						<a href={'/'} className={'text-decoration-none'}>Help</a>
						<a href={'/'} className={'btn btn-sm btn-secondary'}>Logout</a>
					</div>
				</header>
			</div>
			<div className={'bg-secondary-subtle'}>
				<div className={'col-md-8 container mx-auto px-2 py-1'}>
					<Breadcrumbs/>
				</div>
			</div>
			<Outlet/>
		</div>
	);
}
