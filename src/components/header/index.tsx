import { FC, useState } from 'react'
import Logo from "assets/icons/purpleLogo.png"
import styles from "./styles.module.scss"
import { PurpleButton } from 'components/buttons/purpleButtons'
import { Drawer } from 'components/drawer'

export const Header: FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleDrawerOpenAndClose = () => {
		if (isDrawerOpen) {
			setIsDrawerOpen(false)
			console.log("fechou")
		} else {
			setIsDrawerOpen(true)
			console.log("abriu")
		}
	}

	return (
		<div className={styles.wrapper}>
			<button onClick={handleDrawerOpenAndClose}>Open Drawer</button>

			<Drawer isOpen={isDrawerOpen} onClose={handleDrawerOpenAndClose}>
				<h2>Menu</h2>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</Drawer>

			<img src={Logo} alt='UwaVerde Logo' className={styles.logo} />
			<div className={styles.buttons}>
				<PurpleButton href='#' style='outlined' fontSize='small'>Sign In</PurpleButton>
				<PurpleButton href='#' style='normal' fontSize='small'>Donate</PurpleButton>
			</div>
		</div>
	)
}
