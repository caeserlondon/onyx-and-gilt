'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const experienceImages = [
	{
		src: '/images/interiors/experience-1.webp',
		alt: 'Main dining room at Onyx & Gilt',
	},
	{
		src: '/images/interiors/experience-2.webp',
		alt: 'Intimate window table at Onyx & Gilt',
	},
	{
		src: '/images/interiors/experience-3.webp',
		alt: 'VIP booth at Onyx & Gilt',
	},
	{
		src: '/images/interiors/experience-4.webp',
		alt: 'Bar interior at Onyx & Gilt',
	},
	{
		src: '/images/interiors/experience-5.webp',
		alt: 'Wine pouring moment at Onyx & Gilt',
	},
	{
		src: '/images/interiors/experience-6.webp',
		alt: 'Late-night dining atmosphere at Onyx & Gilt',
	},
	{
		src: '/images/interiors/experience-7.webp',
		alt: 'Main balcony at Onyx & Gilt',
	},
]

export function ExperienceSlider() {
	const sectionRef = useRef<HTMLElement | null>(null)
	const viewportRef = useRef<HTMLDivElement | null>(null)
	const trackRef = useRef<HTMLDivElement | null>(null)

	useGSAP(
		() => {
			const section = sectionRef.current
			const viewport = viewportRef.current
			const track = trackRef.current

			if (!section || !viewport || !track) return

			const build = () => {
				ScrollTrigger.getById('experience-slider')?.kill()
				gsap.set(track, { x: 0 })

				const isDesktop = window.innerWidth >= 1280
				const isTablet = window.innerWidth >= 768

				const gap = isTablet ? 24 : 16
				const visibleCards = isDesktop ? 4 : isTablet ? 2.2 : 1.15

				const styles = window.getComputedStyle(viewport)
				const paddingLeft = parseFloat(styles.paddingLeft || '0')
				const paddingRight = parseFloat(styles.paddingRight || '0')
				const usableWidth = viewport.clientWidth - paddingLeft - paddingRight

				const cardWidth =
					(usableWidth - gap * (Math.ceil(visibleCards) - 1)) / visibleCards

				viewport.style.setProperty('--experience-card-width', `${cardWidth}px`)

				const scrollPx = Math.max(track.scrollWidth - viewport.clientWidth, 0)
				const holdPx = Math.round(window.innerHeight * 0.18)
				const totalPx = holdPx + scrollPx

				const holdRatio = totalPx > 0 ? holdPx / totalPx : 0.001
				const scrollRatio = totalPx > 0 ? scrollPx / totalPx : 0.999

				const tl = gsap.timeline({
					scrollTrigger: {
						id: 'experience-slider',
						trigger: section,
						start: 'top top',
						end: () => `+=${totalPx}`,
						pin: true,
						scrub: 1,
						anticipatePin: 1,
						invalidateOnRefresh: true,
					},
				})

				tl.to({}, { duration: Math.max(holdRatio, 0.001) }).to(track, {
					x: -scrollPx,
					ease: 'none',
					duration: Math.max(scrollRatio, 0.001),
				})
			}

			build()
			ScrollTrigger.refresh()

			const onResize = () => build()
			window.addEventListener('resize', onResize)

			return () => {
				window.removeEventListener('resize', onResize)
				ScrollTrigger.getById('experience-slider')?.kill()
			}
		},
		{ scope: sectionRef },
	)

	return (
		<section
			ref={sectionRef}
			className='relative min-h-screen border-t border-white/10 bg-[var(--section)]'
		>
			<div className='min-h-screen overflow-hidden'>
				<div style={{ height: '96px' }} />

				<div className='container-shell'>
					<h2 className='editorial-heading' style={{ marginTop: 0 }}>
						Discover the Experience
					</h2>

					<p
						className='editorial-copy max-w-[58rem]'
						style={{ marginTop: '28px' }}
					>
						Interior atmosphere, intimate tables, private corners, and a bar
						program shaped for the room after dark.
					</p>
				</div>

				<div
					ref={viewportRef}
					className='overflow-hidden'
					style={{
						marginTop: '56px',
						paddingLeft: '24px',
						paddingRight: '24px',
					}}
				>
					<div
						ref={trackRef}
						className='flex h-[56vh] gap-4 md:h-[58vh] md:gap-6 will-change-transform'
					>
						{experienceImages.map((image) => (
							<article
								key={image.src}
								className='relative h-full shrink-0 overflow-hidden bg-[#202020] shadow-[0_18px_48px_rgba(0,0,0,0.32)]'
								style={{
									width: 'var(--experience-card-width)',
									minWidth: 'var(--experience-card-width)',
								}}
							>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									sizes='(max-width: 767px) 85vw, (max-width: 1279px) 45vw, 25vw'
									className='object-cover object-center'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/18 to-transparent' />
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
