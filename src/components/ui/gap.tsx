type GapProps = {
	height?: number
}

export function Gap({ height = 100 }: GapProps) {
	return (
		<div
			aria-hidden='true'
			className='bg-[var(--section)]'
			style={{ height: `${height}px` }}
		/>
	)
}
