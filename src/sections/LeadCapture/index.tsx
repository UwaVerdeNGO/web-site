import styles from "./styles.module.scss"
import { Button } from 'components/buttons/button'

export function LeadCapture() {
	return (
		<div className={styles.content}>
			<h2 className={styles.title}>We don't have to engage in grand, heroic actions to participate in change. Small acts, when multiplied by millions of people, can transform the world.</h2>
			<Button background='gradient' fontSize='medium' href='#' spacing='mediumSpacing' targetBlank>Join Our Mission</Button>
		</div>
	)
}

