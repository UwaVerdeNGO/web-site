import React, { FC, ReactNode } from 'react'
import styles from "./styles.module.scss"

type CardProps = {
	children: ReactNode;
	background: 'purple' | 'black' | 'gradientPurple' | 'gray' | 'green' | 'transparent'
	spacing: 'bigSpacing' | 'mediumSpacing' | 'none'
}

export const Card: FC<CardProps> = ({ background, children, spacing }) => {
	return (
		<div className={`${styles.wrapper} ${styles[background]} ${styles[spacing]}`}>
			{children}
		</div>
	)
}

