import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import Fields from "assets/images/fields.png"
import styles from "./styles.module.scss"

export function ImageSection() {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<img src={Fields} alt='fields' className={styles.image} />
			</ContentContainer>
		</ContentSection>
	)
}

