import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { Card } from 'components/card'
import Arrow from "assets/icons/arrow.png"
import styles from "./styles.module.scss"

export function HorizontalCards() {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<div className={styles.wrapper}>
					<div style={{ height: "348px" }}>
						<Card background='black' spacing='none'>
							<div className={styles.content}>
								<h2 className={styles.cardText}>Are you a company seeking to drive sustainability?</h2>
								<a href="#" role='button' className={styles.arrowButton}>
									<img src={Arrow} alt="arrow" />
								</a>
							</div>
						</Card>
					</div>

					<div style={{ height: "348px" }}>
						<Card background='black' spacing='none'>
							<div className={styles.content}>
								<h2 className={styles.cardText}>Have a great idea?</h2>
								<a href="#" role='button' className={styles.arrowButton}>
									<img src={Arrow} alt="arrow" />
								</a>
							</div>
						</Card>
					</div>

					<div style={{ height: "348px" }}>
						<Card background='black' spacing='none'>
							<div className={styles.content}>
								<h2 className={styles.cardText}>Ready to share your expertise?</h2>
								<a href="#" role='button' className={styles.arrowButton}>
									<img src={Arrow} alt="arrow" />
								</a>
							</div>
						</Card>
					</div>
				</div>
			</ContentContainer>
		</ContentSection>
	)
}

