import {useSetBreadcrumbs} from "../lib/store";
import {pppSection} from "../lib/css";

type SelectorProps = {
	title: string,
	options: string[]
	activeOptionIdx: number
}

function Selector (props: SelectorProps) {
	return <div className={'col-md-6'}>
		<div>
			<div className={'bg-dark text-white p-2 fs-5 d-flex justify-content-between'}>
				<span>{props.title}</span>
				<span><img className={'white-triangle'} src={'/triangle.svg'} /></span>
			</div>
			{props.options.map((opt, idx) => {
				return <div className={'' + (idx === props.activeOptionIdx ? 'bg-secondary-subtleish' : 'bg-secondary-subtle') + ' text-center p-1 fs-5'}>
					{opt}
				</div>
			})}
		</div>
	</div>
}

export default function BusyTimesReport () {
	useSetBreadcrumbs(['Reports', 'Busiest Times Report'])

	return <div className={pppSection}>
		<h1>Busiest Times Report</h1>
		<div className={'row'}>
			<Selector title={'Baseline Date Period'} activeOptionIdx={0} options={[
				'6/11/2024',
				'5/28/2024',
				'5/14/2024',
				'4/30/2024',
			]} />
			<Selector title={'Forecast Period'} activeOptionIdx={0} options={[
				'1 Day',
				'1 Week',
				'1 Month',
				'1 Year',
			]} />
		</div>
		<div className={'bg-secondary-subtle my-2 mx-5 p-2 fs-3 text-center'}>
			Forecast Period: 6/12/2024 - 6/13/2024
		</div>
		<div className={'border border-black p-4 w-75 mx-auto'}>
			<img src={'/chart1.png'} alt={"Chart"} style={{width: '100%'}} />
			<div className={'mx-auto w-50'}>
				<div className={'fw-bold text-center mb-2'}>Staff Complement Summary</div>
				<div className={'d-flex w-100 justify-content-between align-items-center'}>
					<div>Peak</div>
					<div className={'border border-black p-1'}>14</div>
					<div>Lunch</div>
					<div className={'border border-black p-1'}>12</div>
					<div>Dinner</div>
					<div className={'border border-black p-1'}>14</div>
				</div>
			</div>
		</div>
	</div>
}
