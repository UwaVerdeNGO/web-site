import React, { CSSProperties, FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import { BackgroundColors } from 'utils/commonTypes';

type Props = {
	children: ReactNode;
	background?: BackgroundColors;
	style?: CSSProperties;
};

export const Section: FC<Props> = ({
	children,
	background,
	style
}) => {
	return (
		<div
			className={`${styles.section} ${background}`} style={style}
		>
			{children}
		</div>
	);
};
