import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { Card } from 'components/card'
import { Button } from 'components/buttons/button'
import styles from "./styles.module.scss"

export function LeadCapture() {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<Card background='black' spacing='bigSpacing'>
					<div className={styles.content}>
						<h2>We don’t have to engage in grand, heroic actions to participate in change. Small acts, when multiplied by millions of people, can transform the world.</h2>
						<Button background='gradient' fontSize='medium' href='#' spacing='mediumSpacing' targetBlank>Join Our Mission</Button>
					</div>
				</Card>
			</ContentContainer>
		</ContentSection>
	)
}

