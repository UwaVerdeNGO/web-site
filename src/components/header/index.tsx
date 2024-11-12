import { FC, useState } from 'react'
import Logo from "assets/icons/purpleLogo.png"
import { PurpleButton } from 'components/buttons/purpleButtons'
import { Drawer } from 'components/drawer'
import HamburguerMenu from "assets/icons/menu.png"
import styles from "./styles.module.scss"

export const Header: FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleDrawerOpenAndClose = () => {
		if (isDrawerOpen) {
			setIsDrawerOpen(false)
		} else {
			setIsDrawerOpen(true)
		}
	}

	return (
		<div className={styles.wrapper}>
			<button onClick={handleDrawerOpenAndClose} className={styles.menu}>
				<img src={HamburguerMenu} alt="Hamburguer Menu Icon" />
			</button>

			<Drawer isOpen={isDrawerOpen} onClose={handleDrawerOpenAndClose}>
				<div className={styles.drawerContentWrapper}>
					<div className={styles.drawerLeftContent}>
						<h2>Menu</h2>
						<ul className={styles.drawerMenu}>
							<li>About Us</li>
							<li>Our people</li>
							<li>Projects</li>
							<li>Eco-learning</li>
							<li>Collaborate</li>
							<li>News & events</li>
							<li>carrers</li>
							<li>contact</li>
						</ul>
					</div>
					<div className={styles.drawerRightContent}> teste</div>
				</div>
			</Drawer>

			<img src={Logo} alt='UwaVerde Logo' className={styles.logo} />
			<div className={styles.buttons}>
				<PurpleButton href='#' style='outlined' fontSize='small'>Sign In</PurpleButton>
				<PurpleButton href='#' style='normal' fontSize='small'>Donate</PurpleButton>
			</div>
		</div>
	)
}
