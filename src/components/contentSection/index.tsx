import { FC, ReactNode } from 'react';
import { BackgroundColors } from 'utils/commonTypes';
import { ContentContainer } from './contentContainer';
import { Section } from './section';

type Props = {
	align?: 'horizontalAlignCenter';
	children: ReactNode;
	sectionBackground?: BackgroundColors;
	contentBackground?: BackgroundColors;
};

export const ContentSection: FC<Props> = ({
	align,
	children,
	sectionBackground,
	contentBackground,
}) => {
	return (
		<Section background={sectionBackground}>
			<ContentContainer align={align} background={contentBackground}>
				{children}
			</ContentContainer>
		</Section>
	);
};
