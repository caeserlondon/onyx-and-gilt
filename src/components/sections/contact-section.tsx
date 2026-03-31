'use client'

import GlassPillButton from '@/components/ui/GlassPillButton'
import Image from 'next/image'
import { FormEvent, useMemo, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
	const [status, setStatus] = useState<Status>('idle')
	const [errorMessage, setErrorMessage] = useState('')

	const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

	const statusText = useMemo(() => {
		if (status === 'success') return 'Message sent successfully.'
		if (status === 'error') {
			return errorMessage || 'Something went wrong. Please try again.'
		}
		return ''
	}, [status, errorMessage])

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		if (!accessKey) {
			setStatus('error')
			setErrorMessage('Missing Web3Forms access key.')
			return
		}

		setStatus('loading')
		setErrorMessage('')

		const form = event.currentTarget
		const formData = new FormData(form)

		formData.append('access_key', accessKey)
		formData.append('from_name', 'Onyx & Gilt Portfolio Contact')
		formData.append('subject', 'New portfolio enquiry')

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			})

			const result = await response.json()

			if (result.success) {
				setStatus('success')
				form.reset()
				return
			}

			setStatus('error')
			setErrorMessage(result.message || 'Unable to send your message.')
		} catch {
			setStatus('error')
			setErrorMessage('Network error. Please try again.')
		}
	}

	return (
		<section className='relative h-[760px] overflow-hidden'>
			<Image
				src='/images/supporting/contact-bg.png'
				alt='Onyx and Gilt contact background'
				fill
				priority
				className='object-cover object-[72%_center]'
			/>

			<div className='absolute inset-0 bg-black/40' />

			<div className='absolute left-20 top-1/2 z-10 w-[360px] -translate-y-1/2 md:left-28 md:w-[400px] lg:left-40 lg:w-[430px]'>
				<div className='rounded-[28px] bg-black/30 p-6 backdrop-blur-md md:p-7'>
					<p className='mb-2 text-[11px] uppercase tracking-[0.28em] text-white/80'>
						Contact
					</p>

					<h2 className='mb-4 text-5xl font-light leading-none tracking-[-0.05em] text-white'>
						Let&apos;s talk.
					</h2>

					<p className='m-12 text-[16px] leading-7 text-white/80'>
						If you have a question, an idea, or a project in mind, send me a
						message.
					</p>

					<form onSubmit={handleSubmit} className='space-y-8'>
						<input type='hidden' name='botcheck' className='hidden' />

						<div>
							<label
								htmlFor='name'
								className='mb-8 block text-sm text-white/80'
							>
								Name
							</label>
							<input
								id='name'
								name='name'
								type='text'
								required
								autoComplete='name'
								className='h-14 w-full rounded-[18px] border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/45 outline-none'
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='mb-8 block text-sm text-white/80'
							>
								Email
							</label>
							<input
								id='email'
								name='email'
								type='email'
								required
								autoComplete='email'
								className='h-14 w-full rounded-[18px] border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/45 outline-none'
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='mb-8 block text-sm text-white/80'
							>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								required
								rows={5}
								className='w-full rounded-[18px] border border-white/15 bg-white/5 px-4 py-4 text-white placeholder:text-white/45 outline-none'
							/>
						</div>

						<div className='pt-1'>
							<GlassPillButton
								type='submit'
								disabled={status === 'loading'}
								className='mt-2'
							>
								{status === 'loading' ? 'Sending...' : 'Get in Touch'}
							</GlassPillButton>
						</div>

						{status !== 'idle' && (
							<p
								className={`text-sm ${
									status === 'success' ? 'text-white/80' : 'text-[#ffb8b8]'
								}`}
							>
								{statusText}
							</p>
						)}
					</form>
				</div>
			</div>
		</section>
	)
}
