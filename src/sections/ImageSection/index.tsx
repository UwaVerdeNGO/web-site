import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import Fields from "assets/images/fields.png"

export function ImageSection() {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<img src={Fields} alt='fields' style={{ width: "100%" }} />
			</ContentContainer>
		</ContentSection>
	)
}

