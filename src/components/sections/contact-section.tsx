'use client'

import GlassButton from '@/components/ui/GlassButton'
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
					<p className='mb-3 text-[11px] uppercase tracking-[0.28em] text-white/80'>
						Contact
					</p>

					<h2 className='mb-8 text-5xl font-light leading-none tracking-[-0.05em] text-white'>
						Let&apos;s talk.
					</h2>

					<p className='m-8 max-w-[360px] text-[17px] leading-8 text-white/80'>
						If you have a question, an idea, or a project in mind, send me a
						message. Let&apos;s make something great together.
					</p>

					<form onSubmit={handleSubmit}>
						<input type='hidden' name='botcheck' className='hidden' />

						<div style={{ marginBottom: '14px', marginTop: '18px' }}>
							<label
								htmlFor='name'
								className='block text-sm text-white/80'
								style={{ marginBottom: '8px' }}
							>
								Name
							</label>
							<input
								id='name'
								name='name'
								type='text'
								required
								autoComplete='name'
								className='h-14 w-full rounded-[18px] border border-white/15 bg-white/5 text-[15px] leading-[1.2] text-white outline-none'
								style={{
									paddingLeft: '24px',
									paddingRight: '24px',
									boxSizing: 'border-box',
								}}
							/>
						</div>

						<div style={{ marginBottom: '14px' }}>
							<label
								htmlFor='email'
								className='block text-sm text-white/80'
								style={{ marginBottom: '8px' }}
							>
								Email
							</label>
							<input
								id='email'
								name='email'
								type='email'
								required
								autoComplete='email'
								className='h-14 w-full rounded-[18px] border border-white/15 bg-white/5 text-[15px] leading-[1.2] text-white outline-none'
								style={{
									paddingLeft: '24px',
									paddingRight: '24px',
									boxSizing: 'border-box',
								}}
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm text-white/80'
								style={{ marginBottom: '8px' }}
							>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								required
								rows={5}
								className='w-full rounded-[18px] border border-white/15 bg-white/5 text-[15px] leading-7 text-white outline-none'
								style={{
									paddingLeft: '24px',
									paddingRight: '24px',
									paddingTop: '20px',
									paddingBottom: '20px',
									boxSizing: 'border-box',
								}}
							/>
						</div>

						<div style={{ marginTop: '12px' }}>
							<GlassButton
								type='submit'
								disabled={status === 'loading'}
								label={status === 'loading' ? 'Sending...' : 'Send it my way'}
							/>
						</div>

						{status !== 'idle' && (
							<p
								className={`text-sm ${
									status === 'success' ? 'text-green-500' : 'text-[#e64f4f]'
								}`}
								style={{ marginTop: '18px' }}
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
