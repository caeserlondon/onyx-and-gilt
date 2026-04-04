export function HeroImageSection() {
	return (
		<section className='relative min-h-[88vh] overflow-hidden bg-[var(--section)]'>
			<img
				src='/images/interiors/hero-wide.webp'
				alt='Onyx & Gilt interior'
				className='absolute inset-0 h-full w-full object-cover'
			/>

			<div className='hero-image-overlay absolute inset-0' />
		</section>
	)
}
