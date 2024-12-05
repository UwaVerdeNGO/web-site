import React, { FC } from 'react';

type Props = {
	height?: string;
	width?: string;
};

export const Spacer: FC<Props> = ({
	height,
	width,
}: Props) => {
	return (
		<div style={{ height, width }} />
	);
}
