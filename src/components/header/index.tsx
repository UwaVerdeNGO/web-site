import { FC } from 'react'
import Logo from "assets/icons/logo.png"
import styles from "./styles.module.scss"
import { PurpleButton } from 'components/buttons/purpleButtons'
import { SearchButton } from 'components/buttons/searchButton'

export const Header: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.headerLeftSide}>
				<img src={Logo} alt='UwaVerde Logo' className={styles.logo} />
				<div className={styles.headerOptions}>
					<a href='#'>About Us</a>
					<a href='#'>Projects</a >
					<a href='#'>Eco-Learning</a >
					<a href='#'>Collborate</a >
					<a href='#'>News & Events</a >
					<a href='#'>Contact</a >
				</div>
			</div>
			<div className={styles.buttons}>
				<SearchButton />
				<PurpleButton href='#' style='outlined'>Sign In</PurpleButton>
				<PurpleButton href='#' style='normal'>Donate</PurpleButton>
			</div>
		</div>
	)
}
