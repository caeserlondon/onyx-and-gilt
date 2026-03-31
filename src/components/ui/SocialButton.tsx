import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './SocialButton.module.css'

type SocialButtonProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'className' | 'children'
> & {
	label: string
	children: ReactNode
	className?: string
}

function cn(...classes: Array<string | undefined | false>) {
	return classes.filter(Boolean).join(' ')
}

export default function SocialButton({
	label,
	children,
	className,
	target,
	rel,
	...rest
}: SocialButtonProps) {
	const isExternal =
		typeof rest.href === 'string' &&
		!rest.href.startsWith('mailto:') &&
		!rest.href.startsWith('tel:')

	return (
		<a
			aria-label={label}
			title={label}
			className={cn(styles.button, className)}
			target={target ?? (isExternal ? '_blank' : undefined)}
			rel={rel ?? (isExternal ? 'noreferrer noopener' : undefined)}
			{...rest}
		>
			<span className={styles.icon}>{children}</span>
		</a>
	)
}
