import React from 'react'
import styles from "./styles.module.scss"
import { Spacer } from 'components/spacer';

type NewsCardProps = {
	imageSrc: string;
	imageAlt: string;
	title: string;
	category: string;
}
export const NewsCard: React.FC<NewsCardProps> = ({ category, imageSrc, title, imageAlt }) => {
	return (
		<div className={styles.wrapper}>
			<img src={imageSrc} alt={imageAlt} className={styles.contentImage} />
			<Spacer height='16px' />
			<span className={styles.category}>{category}</span>
			<Spacer height='8px' />
			<p className={styles.title}>{title}</p>
		</div>
	)
}