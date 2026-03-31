import Image from 'next/image'

export function Footer() {
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
			</div>
		</footer>
	)
}
