import { FC } from 'react'
import styles from "./styles.module.scss"

type ButtonProps = {
	children: React.ReactNode;
	href: string;
	targetBlank?: boolean;
	style: 'normal' | 'outlined' | 'gradient'
}

export const PurpleButton: FC<ButtonProps> = ({ children, href, style, targetBlank }) => {
	return (
		<a href={href} target={targetBlank ? "_blank" : undefined} className={`${styles.button} ${styles[style]}`}>{children}</a>
	)
}
