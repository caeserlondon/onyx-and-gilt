'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const drinks = [
	{
		src: '/images/drinks/drink-1.png',
		alt: 'Onyx Old Fashioned',
		name: 'Onyx Old Fashioned',
		offset: 0,
	},
	{
		src: '/images/drinks/drink-2.png',
		alt: 'Velvet Fig Martini',
		name: 'Velvet Fig Martini',
		offset: 26,
	},
	{
		src: '/images/drinks/drink-3.png',
		alt: 'Marina Ember',
		name: 'Marina Ember',
		offset: 0,
	},
	{
		src: '/images/drinks/drink-4.png',
		alt: 'Gilded Bloom',
		name: 'Gilded Bloom',
		offset: 26,
	},
]

export function CocktailsWine() {
	const sectionRef = useRef<HTMLElement | null>(null)

	useGSAP(
		() => {
			const section = sectionRef.current
			if (!section) return

			const cards = gsap.utils.toArray<HTMLElement>('[data-drink-card]')

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
			className='relative bg-[var(--section)] mt-[160px] md:mt-[220px] pt-[180px] pb-32 md:pt-[220px] md:pb-40'
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
						Cocktails &amp; Wine
					</h2>

					<p
						className='editorial-copy max-w-[34rem]'
						style={{
							marginTop: '6px',
							paddingBottom: 0,
						}}
					>
						The bar program is built for slow evenings and long conversations,
						with signature cocktails, polished classics, and a wine list shaped
						for the room after dark.
					</p>
				</div>

				<div className='grid gap-x-5 gap-y-10 md:grid-cols-4 md:items-start'>
					{drinks.map((drink) => (
						<article
							key={drink.name}
							data-drink-card
							style={{ marginTop: `${drink.offset}px` }}
						>
							<div className='relative aspect-[3/4] overflow-hidden bg-[#202020] shadow-[0_18px_48px_rgba(0,0,0,0.28)]'>
								<Image
									src={drink.src}
									alt={drink.alt}
									fill
									sizes='(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw'
									className='object-cover object-center'
								/>
							</div>

							<p
								className='text-[1.05rem] uppercase tracking-[0.01em] text-white'
								style={{ marginTop: '22px' }}
							>
								{drink.name}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
