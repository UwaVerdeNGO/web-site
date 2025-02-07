import React, { useState, useEffect } from 'react';
import { Button } from 'components/buttons/button';
import styles from "./styles.module.scss"

export const ScalingCard = () => {
	const [scale, setScale] = useState(1);
	const [padding, setPadding] = useState(100);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const componentOffset = 0;
			const maxScale = 1.7;


			let newScale = 1 + (scrollY - componentOffset) / windowHeight;
			newScale = Math.min(Math.max(newScale, 1), maxScale);
			setScale(newScale);
			let newPadding = 120 * scale;
			setPadding(newPadding)
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			style={{
				width: '60%',
				borderRadius: scale !== 1.7 ? "30px" : "0",
				padding: `${padding}px 0`,
				transform: `scale(${scale})`,
				transformOrigin: 'center top',
				transition: 'transform 0.2s ease-out',
				overflowX: 'hidden'
			}}
			className={styles.content}
		>
			<h2
				style={{ transform: `scale(0.8)` }}
				className={styles.title}>We don't have to engage in grand, heroic actions to participate in change. Small acts, when multiplied by millions of people, can transform the world.</h2>
			<Button style={{ transform: `scale(0.6)` }} background='gradient' fontSize='medium' href='#' spacing='mediumSpacing' targetBlank>Join Our Mission</Button>

		</div>
	);
};
