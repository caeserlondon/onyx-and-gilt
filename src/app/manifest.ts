import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Onyx & Gilt',
		short_name: 'Onyx & Gilt',
		description:
			'A cinematic luxury restaurant website concept by Caeser Ibrahim, set above Dubai Marina.',
		start_url: '/',
		display: 'standalone',
		background_color: '#050505',
		theme_color: '#050505',
		lang: 'en-GB',
		icons: [
			{
				src: '/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: '/apple-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
	}
}
