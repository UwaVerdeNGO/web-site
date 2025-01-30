import React, { useState } from "react";
import GreenArrow from "assets/icons/greenArrow.png"
import WhiteArrow from "assets/icons/whiteArrow.png"
import styles from "./styles.module.scss"

interface CarouselProps {
	cards: React.ReactNode[]; // Aceita componentes de card prontos
}

export const Carousel: React.FC<CarouselProps> = ({ cards }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isFowardHovered, setIsFowardHovered] = useState(false);
	const [isBackwardHovered, setIsBackwardHovered] = useState(false);

	const handlePrev = () => {
		if (activeIndex === 0) {
			return setActiveIndex(cards.length - 1)
		}
		return setActiveIndex(activeIndex - 1)
	};

	const handleNext = () => {
		if (activeIndex === cards.length - 1) {
			return setActiveIndex(0)
		}
		return setActiveIndex(activeIndex + 1)
	};


	const getClassName = (index: number) => {
		if (index === activeIndex) {
			return styles.active;
		}
		if (index === activeIndex - 1) {
			return styles.prev
		}
		if (index === activeIndex + 1) {
			return styles.next
		}
		if (activeIndex === 0 && index === cards.length - 1) {
			return styles.prev
		}
		if (activeIndex === cards.length - 1 && index === 0) {
			return styles.next
		}
		return styles.hidden
	};

	return (
		<div className={styles.carouselContainer}>
			<div className={styles.buttonsWrapper}>
				<button onClick={handlePrev} className={styles.carouselButton} onMouseEnter={() => setIsBackwardHovered(true)} onMouseLeave={() => setIsBackwardHovered(false)}>
					<img src={isBackwardHovered ? WhiteArrow : GreenArrow} alt="Back Arrow" />
				</button>
				<button onClick={handleNext} className={styles.carouselButton} onMouseEnter={() => setIsFowardHovered(true)} onMouseLeave={() => setIsFowardHovered(false)}>
					<img src={isFowardHovered ? WhiteArrow : GreenArrow} alt="Foward Arrow" />

				</button>
			</div>
			<div className={styles.carouselCards}>
				{cards.map((item, index) => (
					<div key={index} className={`${styles.carouselCard} ${getClassName(index)}`}>
						{item}
					</div>
				))}
			</div>

		</div>
	);
};
