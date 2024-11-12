import { FC } from 'react'
import styles from "./styles.module.scss"

type ButtonProps = {
	children: React.ReactNode;
	href: string;
	targetBlank?: boolean;
	style: 'normal' | 'outlined' | 'gradient'
	fontSize: 'small' | 'medium'
}

export const PurpleButton: FC<ButtonProps> = ({ children, href, style, targetBlank, fontSize }) => {
	return (
		<a href={href} target={targetBlank ? "_blank" : undefined} rel="noreferrer" className={`${styles.button} ${styles[style]} ${styles[fontSize]}`}>{children}</a>
	)
}
