import { Button } from 'components/buttons/button'
import { Spacer } from 'components/spacer'
import styles from "./styles.module.scss"

export function ClimateIsChanging() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.firstMessage}>Climate is changing!</h1>
			<Spacer height='8px' />
			<h1 className={styles.secondMessage}>Are you?</h1>
			<div className={styles.buttonWrapper}>
				<Button background='gradient' fontSize='medium' href='' spacing='mediumSpacing'>Join Our Mission</Button>
			</div>
		</div>
	)
}

