import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { Button } from 'components/buttons/button'
import { Spacer } from 'components/spacer'
import styles from "./styles.module.scss"

export function Newsletter() {
	return (
		<div className={styles.wrapper}>
			<ContentSection sectionBackground='greenBackground' style={{ borderRadius: "30px 30px 0 0" }}>
				<Spacer className={styles.spacerTop} />
				<ContentContainer>
					<h2 className={styles.title}>Stay Ahead</h2>
					<Spacer height='4px' />
					<h3 className={styles.subtitle}>Subscribe for Events, News, and Updates.</h3>
					<Spacer height='32px' />
					<p className={styles.email}>Email</p>
					<Spacer height='8px' />
					<div className={styles.inputText}>
						<input type="text" />
						<Spacer width='25px' />
						<Button background='white' fontSize='medium' href='#' spacing='bigSpacing'>Subscribe</Button>
					</div>
				</ContentContainer>
				<Spacer className={styles.spacerBottom} />
			</ContentSection>
		</div>
	)
}

