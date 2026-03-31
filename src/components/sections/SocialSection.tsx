import SocialButton from '@/components/ui/SocialButton'

function EmailIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' fill='none'>
			<path
				d='M3 7.25C3 6.01 4.01 5 5.25 5h13.5C19.99 5 21 6.01 21 7.25v9.5C21 17.99 19.99 19 18.75 19H5.25C4.01 19 3 17.99 3 16.75v-9.5Z'
				stroke='currentColor'
				strokeWidth='1.7'
			/>
			<path
				d='m4.25 6.5 7.05 5.23a1.2 1.2 0 0 0 1.4 0L19.75 6.5'
				stroke='currentColor'
				strokeWidth='1.7'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function PortfolioIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' fill='none'>
			<circle
				cx='12'
				cy='12'
				r='8.25'
				stroke='currentColor'
				strokeWidth='1.7'
			/>
			<path
				d='M3.75 12h16.5M12 3.75c2.1 2.28 3.2 5.16 3.2 8.25 0 3.09-1.1 5.97-3.2 8.25-2.1-2.28-3.2-5.16-3.2-8.25 0-3.09 1.1-5.97 3.2-8.25Z'
				stroke='currentColor'
				strokeWidth='1.7'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function LinkedInIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' fill='currentColor'>
			<path d='M6.15 8.55H3.2V18h2.95V8.55ZM4.67 3.9a1.77 1.77 0 1 0 0 3.54 1.77 1.77 0 0 0 0-3.54ZM20.8 12.35c0-2.9-1.55-4.25-3.62-4.25-1.67 0-2.41.92-2.83 1.56V8.55h-2.95V18h2.95v-5.45c0-.29.02-.58.1-.78.23-.58.74-1.18 1.6-1.18 1.13 0 1.58.86 1.58 2.12V18h2.95v-5.65Z' />
		</svg>
	)
}

function GitHubIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' fill='currentColor'>
			<path d='M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.23.76-.52 0-.26-.01-1.1-.02-2-3.08.67-3.73-1.31-3.73-1.31-.5-1.29-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.11.08 1.69 1.14 1.69 1.14.98 1.69 2.6 1.2 3.23.92.1-.72.38-1.2.7-1.48-2.45-.28-5.03-1.23-5.03-5.45 0-1.2.43-2.18 1.13-2.95-.12-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.4 10.4 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.23 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.23-2.59 5.16-5.06 5.43.4.34.75 1 .75 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z' />
		</svg>
	)
}

export default function SocialSection() {
	return (
		<section className='h-[150px] border-t border-white/10 bg-transparent'>
			<div className='mx-auto h-full w-full max-w-[1440px]'>
				<div className='grid h-full grid-cols-2'>
					<div className='flex items-center justify-center'>
						<div className='w-full max-w-[420px] text-center md:translate-x-8 lg:translate-x-12'>
							<p className='text-[16px] leading-7 text-white/82 md:text-[17px]'>
								{`© ${new Date().getFullYear()} Onyx & Gilt. All rights reserved.`}
							</p>
							<p className='mt-2 text-[15px] leading-7 text-white/58 md:text-[16px]'>
								Designed and built by Caeser Ibrahim.
							</p>
						</div>
					</div>

					<div className='flex items-center justify-center'>
						<div className='flex items-center gap-4 md:gap-5'>
							<SocialButton href='mailto:caeserlondon@gmail.com' label='Email'>
								<EmailIcon />
							</SocialButton>

							<SocialButton
								href='https://caeser-ibrahim.vercel.app'
								label='Portfolio'
							>
								<PortfolioIcon />
							</SocialButton>

							<SocialButton
								href='https://www.linkedin.com/in/caeser-ibrahim'
								label='LinkedIn'
							>
								<LinkedInIcon />
							</SocialButton>

							<SocialButton
								href='https://github.com/caeserlondon'
								label='GitHub'
							>
								<GitHubIcon />
							</SocialButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
