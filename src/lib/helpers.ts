export default function formatCents (cents: number) {
	return `$${(cents / 100).toFixed(2)}`
}
