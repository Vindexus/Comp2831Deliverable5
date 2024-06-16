import {Outlet} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

export default function Root() {
	return (
		<div className={''}>
			<header className={'w-100 justify-content-between d-flex p-3 bg-secondary-subtle'}>
				<div className={''}>
					Pizza Admin
				</div>
				<div className={''}>
					Welcome, Admin
				</div>
			</header>
			<div className={'container mx-auto col-lg-8 py-2'}>
				<Breadcrumbs/>
				<Outlet/>
			</div>
		</div>
	);
}
