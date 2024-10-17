import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import { BackgroundColors } from 'utils/commonTypes';

type Props = {
	children: ReactNode;
	background?: BackgroundColors;
};

export const Section: FC<Props> = ({
	children,
	background,

}) => {
	return (
		<div
			className={`${styles.section} ${background}`}
		>
			{children}
		</div>
	);
};
