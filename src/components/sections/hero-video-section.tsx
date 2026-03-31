export function HeroVideoSection() {
	return (
		<section className='relative h-screen overflow-hidden'>
			<video
				className='absolute inset-0 h-full w-full object-cover'
				src='/video/hero.mp4'
				autoPlay
				muted
				loop
				playsInline
			/>

			<div className='hero-video-overlay absolute inset-0' />

			<div className='container-shell relative z-10 flex h-full flex-col justify-start pt-12 pb-8 md:pt-14'>
				<div className='video-copy-block max-w-4xl'>
					<p className='video-kicker mb-4'>Dubai Marina</p>
					<h1 className='video-title'>Onyx &amp; Gilt</h1>
					<p className='video-copy'>
						A restaurant and cocktail lounge in the sky above Dubai Marina.
					</p>
				</div>
			</div>

			<div className='scroll-cue-wrap'>
				<div className='scroll-cue' aria-hidden='true'>
					<div className='scroll-cue-line' />
					<div className='scroll-cue-chevron'>⌄</div>
				</div>
			</div>
		</section>
	)
}
