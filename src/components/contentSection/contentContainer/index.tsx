import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import { BackgroundColors } from 'utils/commonTypes';

type Props = {
	background?: BackgroundColors;
	align?: 'horizontalAlignCenter';
	children: ReactNode;
};

export const ContentContainer: FC<Props> = ({
	align,
	children,
	background,
}) => {
	return (
		<div className={`${align} ${styles.section} ${background}`}>{children}</div>
	);
};
