import { CSSProperties, FC, ReactNode } from 'react';
import { BackgroundColors } from 'utils/commonTypes';
import { ContentContainer } from './contentContainer';
import { Section } from './section';

type Props = {
	align?: 'horizontalAlignCenter';
	children: ReactNode;
	sectionBackground?: BackgroundColors;
	contentBackground?: BackgroundColors;
	style?: CSSProperties;
};

export const ContentSection: FC<Props> = ({
	align,
	children,
	sectionBackground,
	contentBackground,
	style
}) => {
	return (
		<Section background={sectionBackground} style={style}>
			<ContentContainer align={align} background={contentBackground}>
				{children}
			</ContentContainer>
		</Section>
	);
};
