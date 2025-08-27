import React from 'react'
import styles from './styles.module.scss'

type ProfileCardProps = {
	name: string
	role: string
	image: string
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image }) => {
	return (
		<div className={styles.wrapper}>
			<img src={image} alt={name} className={styles.profilePhoto} />
			<h2 className={styles.name}>{name}</h2>
			<p className={styles.role}>{role}</p>
		</div>
	)
}

