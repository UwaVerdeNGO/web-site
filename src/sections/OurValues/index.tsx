import AccordionComponent from 'components/accordion';
import { ContentSection } from 'components/contentSection';
import { ContentContainer } from 'components/contentSection/contentContainer';
import { AccordionData } from './accordionData';

export function OurValues() {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<AccordionComponent data={AccordionData} />
			</ContentContainer>
		</ContentSection>
	);
}
