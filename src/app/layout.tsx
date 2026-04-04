import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-jost',
})

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['400', '500'],
	style: ['normal', 'italic'],
	variable: '--font-cormorant',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://onyx-and-gilt.vercel.app'),
	title: {
		default: 'Onyx & Gilt',
		template: '%s | Onyx & Gilt',
	},
	description:
		'A cinematic luxury restaurant website concept by Caeser Ibrahim, set above Dubai Marina.',
	applicationName: 'Onyx & Gilt',
	authors: [
		{ name: 'Caeser Ibrahim', url: 'https://onyx-and-gilt.vercel.app/' },
	],
	creator: 'Caeser Ibrahim',
	publisher: 'Caeser Ibrahim',
	keywords: [
		'Caeser Ibrahim',
		'Onyx & Gilt',
		'luxury restaurant website',
		'Dubai Marina',
		'Next.js portfolio',
		'hospitality web design',
	],
	openGraph: {
		type: 'website',
		url: 'https://onyx-and-gilt.vercel.app/',
		title: 'Onyx & Gilt',
		description:
			'A cinematic luxury restaurant website concept by Caeser Ibrahim, set above Dubai Marina.',
		siteName: 'Onyx & Gilt',
		images: [
			{
				url: '/opengraph-image.png',
				width: 1200,
				height: 630,
				alt: 'Onyx & Gilt luxury restaurant website preview',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Onyx & Gilt',
		description:
			'A cinematic luxury restaurant website concept by Caeser Ibrahim, set above Dubai Marina.',
		images: ['/twitter-image.png'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${jost.variable} ${cormorant.variable}`}>
				{children}
			</body>
		</html>
	)
}
