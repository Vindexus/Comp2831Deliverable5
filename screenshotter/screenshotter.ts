import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'; // or import puppeteer from 'puppeteer-core';
import 'dotenv'
import chalk from 'chalk'
const log = console.log;

type Destination = {
	url: string
	title: string
	description?: string
}

const destinations : Destination[] = [
	{
		url: '/login',
		title: 'Login Page',
		description: 'Employees sign in with their given employee number and password.',
	},
	{
		url: '/',
		title: 'Home Page as Owner',
		description: 'Home page as viewed by a user who is the restaurant owner',
	},
	{
		url: '/?user=sophie',
		title: 'Home Page as Server',
		description: 'Home page as viewed by a user who is a server',
	},
	{
		url: '/register',
		title: 'Create Customer Account',
		description: 'Page for employees to register a customer in person or over the phone',
	},
	{
		url: '/register?errors=1',
		title: 'Customer Validation',
		description: 'Showing validation errors on customer creation form',
	},
	{
		url: '/register?success=1',
		title: 'Successfully Created Customer',
		description: 'Message shows success and directs back to the home page.',
	},
	{
		url: '/customer-discounts',
		title: 'Customer Loyalty Discount Program Settings',
		description: 'Adjust all the settings for the CLDP.',
	},
	{
		url: '/customer-discounts-log',
		title: 'CLDP Change Log',
		description: 'Shows a lit of all changes to the settings and who made them.',
	},
	{
		url: '/new-order',
		title: 'Create New Order',
		description: 'Add items to an order. Add notes per item.',
	},
	{
		url: '/new-order?modal=1',
		title: 'Create New Order: Notes Window',
		description: 'Window for modifying the notes for an item in an order.',
	},
	{
		url: '/confirm-order',
		title: 'Confirm Order',
		description: 'Review an order\'s details before finalizing it.',
	},
	{
		url: '/reports/busy-times',
		title: 'Report of Busiest Times',
		description: 'Graph view shows peak ordering times for given period.'
	},
	{
		url: '/reports/payroll?employees=1',
		title: 'Payroll Report for Business Owner',
		description: 'Shows dropdown for selecting employee.'
	},
	{
		url: '/reports/payroll',
		title: 'Payroll Report for Employee',
		description: 'Shows payroll report for logged in employee'
	},

];

const VIEW_PORT_WIDTH = 1080;
const VIEW_PORT_HEIGHT = 1024;


;(async function () {
	const screenshotPath = path.resolve(process.env.SCREENSHOT_DIR || './screenshots')
	log('Screenshots will be saved to ' + chalk.cyan(screenshotPath))
	log(chalk.redBright('Removing') + ' all files from ' + chalk.cyan(screenshotPath))

	fs.rmSync(screenshotPath, { recursive: true, force: true, })
	log('Recreating ' + chalk.green(screenshotPath))
	fs.mkdirSync(screenshotPath)

// Launch the browser and open a new blank page
	log('Booting up Chromium via puppeteer...')
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({width: VIEW_PORT_WIDTH, height: VIEW_PORT_HEIGHT});

	const port = process.env.PORT || '2000';

// Navigate the page to a URL.
	const line = chalk.hex('#5ADBFF')
	log(`Preparing to take ${chalk.greenBright(destinations.length)} screenshots`)
	let num = 0;
	for (let dest of destinations) {
		num++
		log()
		log(line(num.toString().repeat(80/(num).toString().length)))
		log(chalk.greenBright(dest.title))
		let url = 'http://localhost:' + port + dest.url
		url += url.includes('?') ? '&' : '?'
		url += 'screenshot=true'
		log(`Navigating to ${chalk.magenta(url)}`)
		await page.goto(url);

		const has404 = await page.evaluate(() => {
			return document.querySelector('body')!.textContent!.indexOf('404 Not Found') >= 0
		})

		if (has404) {
			log(chalk.redBright('404 Not Found'))
			process.exit(1)
		}

		// Change the title to slugified version for the filename
		const prefix = ('0000' + num).slice(-2)
		const slug = prefix + '_' + dest.title.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9\-]/ig, '')
		const basename = slug + '.png'

		const filepath = path.join(screenshotPath, basename)
		log('Saving ' + chalk.cyanBright(basename))
		log(chalk.gray('     to ' + filepath))

		await page.evaluate((dest) => {
			document.getElementById('screenshot-title')!.innerText = dest.title
			if (dest.description) {
				document.getElementById('screenshot-description')!.innerText = dest.description
			}
		}, dest)

		// For our longer pages we need to adjust the view port height so it isn't cropped off at the bottom
		const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
		await page.setViewport({
			width: VIEW_PORT_WIDTH,
			height: bodyHeight
		});

		await page.screenshot({
			path: filepath,
			type: 'png',
			fullPage: true,
		});
		log()
	}

	await browser.close();
	log(line('='.repeat(80)))

	log(chalk.bgGreenBright.black('Done.'));
})()

