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
	title: 'Onyx & Gilt',
	description:
		'A high-rise dining and cocktail destination above Dubai Marina.',
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
