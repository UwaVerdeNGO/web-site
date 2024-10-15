import { FC } from 'react'
import styles from "./styles.module.scss"

type ButtonProps = {
	children: React.ReactNode;
	href: string;
	targetBlank?: boolean;
	outline?: boolean
}

export const Button: FC<ButtonProps> = ({ children, href, outline, targetBlank }) => {
	return (
		<a href={href} target={targetBlank ? "_blank" : undefined} className={`${styles.button} ${outline ? styles.outlined : styles.normal}`}>{children}</a>
	)
}
