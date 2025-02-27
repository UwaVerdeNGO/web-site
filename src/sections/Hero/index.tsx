import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import Terra from "assets/images/terraTeste.png"
import styles from "./styles.module.scss"
import { Button } from 'components/buttons/button'
import { Spacer } from 'components/spacer'

export function Hero() {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<div className={styles.contentWrapper}>

					<div className={styles.mobileButton}>
						<Button background='gradient' fontSize='medium' href='#' spacing="mediumSpacing">Join Our Mission</Button>
					</div>

					<div className={styles.leftContent}>
						<h2>Network, Innovate, Sustain.</h2>
						<h3> Promote sustainable living through eco-friendly products and innovative solutions.</h3>
					</div>
					<div className={styles.rightContent}>
						<img src={Terra} alt="Earth Content" />
					</div>

				</div>
			</ContentContainer>
		</ContentSection>
	)
}

