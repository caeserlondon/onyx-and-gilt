'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './GlassButton.module.css'

type GlassButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children' | 'className'
> & {
	children?: ReactNode
	label?: string
	className?: string
}

function cn(...classes: Array<string | undefined | false>) {
	return classes.filter(Boolean).join(' ')
}

export default function GlassButton({
	children,
	label,
	type = 'button',
	className,
	disabled,
	...rest
}: GlassButtonProps) {
	const text =
		typeof children === 'string'
			? children
			: typeof label === 'string'
				? label
				: 'Send it my way'

	return (
		<button
			type={type}
			disabled={disabled}
			data-label={text}
			aria-label={text}
			className={cn(styles.button, className)}
			{...rest}
		>
			<span className={styles.text}>{text}</span>
		</button>
	)
}
