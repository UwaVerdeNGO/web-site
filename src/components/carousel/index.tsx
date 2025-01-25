import React, { useState } from "react";
import styles from "./styles.module.scss"

interface CarouselProps {
	cards: React.ReactNode[]; // Aceita componentes de card prontos
}

export const Carousel: React.FC<CarouselProps> = ({ cards }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? cards.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === cards.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className={styles.carouselContainer}>
			<button onClick={handlePrev} className={styles.carouselButton}>
				{"<"}
			</button>
			<div className={styles.carouselCards}>
				{cards.map((card, index) => {
					const isActive = index === activeIndex;
					const isPrev =
						index === (activeIndex === 0 ? cards.length - 1 : activeIndex - 1);
					const isNext =
						index === (activeIndex === cards.length - 1 ? 0 : activeIndex + 1);

					return (
						<div
							key={index}
							className={`${styles.carouselCard} ${isActive
								? styles.active
								: isPrev
									? styles.prev
									: isNext
										? styles.next
										: ""
								}`}
						>
							{card}
						</div>
					);
				})}
			</div>
			<button onClick={handleNext} className={styles.carouselButton}>
				{">"}
			</button>
		</div>
	);
};
