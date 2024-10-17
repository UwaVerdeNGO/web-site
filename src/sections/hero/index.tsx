import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import styles from "./styles.module.scss"
import { PurpleButton } from 'components/buttons/purpleButtons'

export function Hero() {
	return (
		<ContentSection sectionBackground='grayBackground'>
			<ContentContainer align='horizontalAlignCenter'>
				<div className={styles.leftContent}>
					<h2>Network Innovate Sustain</h2>
					<h3> Promote sustainable living through eco- friendly products and innovative solutions.</h3>
					<PurpleButton style='gradient' href='#'>Join Our Misson</PurpleButton>
				</div>
				<div className={styles.rightContent}>terra</div>
			</ContentContainer>
		</ContentSection>
	)
}

