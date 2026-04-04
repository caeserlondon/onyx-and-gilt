'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const dishes = [
	{
		src: '/images/dishes/dish-1.webp',
		alt: 'Signature ribeye steak',
		name: 'Ribeye Steak',
		offset: 0,
	},
	{
		src: '/images/dishes/dish-2.webp',
		alt: 'Truffle tagliolini',
		name: 'Truffle Tagliolini',
		offset: 26,
	},
	{
		src: '/images/dishes/dish-3.webp',
		alt: 'Miso glazed black cod',
		name: 'Miso Black Cod',
		offset: 0,
	},
	{
		src: '/images/dishes/dish-4.webp',
		alt: 'Burrata with charred tomatoes',
		name: 'Burrata & Tomatoes',
		offset: 26,
	},
]

export function SignatureDishes() {
	const sectionRef = useRef<HTMLElement | null>(null)

	useGSAP(
		() => {
			const section = sectionRef.current
			if (!section) return

			const cards = gsap.utils.toArray<HTMLElement>('[data-dish-card]')

			gsap.set(cards, {
				y: 180,
				autoAlpha: 0,
			})

			gsap
				.timeline({
					scrollTrigger: {
						trigger: section,
						start: 'top 72%',
						end: 'top 28%',
						scrub: 1,
					},
				})
				.to(cards, {
					y: 0,
					autoAlpha: 1,
					ease: 'none',
					stagger: 0.18,
				})
		},
		{ scope: sectionRef },
	)

	return (
		<section
			ref={sectionRef}
			className='relative bg-[var(--section)] pt-12 pb-12 md:pt-20 md:pb-20'
		>
			<div className='container-shell'>
				<div
					className='grid md:grid-cols-[1.15fr_0.85fr] md:items-start'
					style={{
						columnGap: '24px',
						rowGap: '10px',
						marginBottom: '100px',
					}}
				>
					<h2
						className='editorial-heading'
						style={{
							marginBottom: 0,
							paddingBottom: 0,
						}}
					>
						Signature Dishes
					</h2>

					<p
						className='editorial-copy max-w-[34rem]'
						style={{
							marginTop: '6px',
							paddingBottom: 0,
						}}
					>
						From prime cuts to refined seafood and house signatures, the menu is
						designed around richness, balance, and late-night indulgence.
					</p>
				</div>

				<div className='grid gap-x-5 gap-y-10 md:grid-cols-4 md:items-start'>
					{dishes.map((dish) => (
						<article
							key={dish.name}
							data-dish-card
							style={{ marginTop: `${dish.offset}px` }}
						>
							<div className='relative aspect-[3/4] overflow-hidden bg-[#202020] shadow-[0_18px_48px_rgba(0,0,0,0.28)]'>
								<Image
									src={dish.src}
									alt={dish.alt}
									fill
									sizes='(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw'
									className='object-cover object-center'
								/>
							</div>

							<p
								className='text-[1.05rem] uppercase tracking-[0.01em] text-white'
								style={{ marginTop: '22px' }}
							>
								{dish.name}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
