import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import Terra from "assets/images/terraTeste.png"
import styles from "./styles.module.scss"

export function Hero() {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer align='horizontalAlignCenter'>
				<div className={styles.leftContent}>
					<h2>Network, Innovate, Sustain.</h2>
					<h3> Promote sustainable living through eco-friendly products and innovative solutions.</h3>
				</div>
				<div className={styles.rightContent}>
					<img src={Terra} alt="Earth Content" />
				</div>
			</ContentContainer>
		</ContentSection>
	)
}

