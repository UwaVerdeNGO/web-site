import { FC } from 'react'
import MagnifyingGlass from "assets/icons/search.png"
import styles from "./styles.module.scss"

type ButtonProps = {
	// children: React.ReactNode;
}

export const SearchButton: FC<ButtonProps> = ({ }) => {
	return (
		<div className={styles.input}>
			<img src={MagnifyingGlass} className={styles.magnifyingGlass} />
		</div>
	)
}