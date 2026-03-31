import Image from 'next/image'

export function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='bg-[var(--section)]'>
			<div className='relative w-full aspect-[1528/684]'>
				<Image
					src='/images/supporting/dubai-marina-map-footer.png'
					alt='Dubai Marina map footer background'
					fill
					className='object-contain object-center'
					sizes='100vw'
				/>

				<div className='absolute inset-0 bg-black/12' />

				<div className='absolute bottom-0 left-0 w-full px-6 pb-6 md:px-10 md:pb-8 lg:px-14 lg:pb-10'>
					<p className='text-xs uppercase tracking-[0.16em] text-white/72'>
						© Caeser Ibrahim. All rights reserved. {year}
					</p>
				</div>
			</div>
		</footer>
	)
}
