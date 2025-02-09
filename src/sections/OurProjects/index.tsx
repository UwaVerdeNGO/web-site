import { Carousel } from 'components/carousel';
import { Card } from 'components/card';
import styles from "./styles.module.scss"

export function OurProjects() {
	const cards = [
		<Card background='transparent' spacing='mediumSpacing'>
			<div className={styles.cardContent}>
				<h2 className={styles.cardTitle}>Green Building</h2>
				<span className={styles.cardDescription}>
					We are aiming to reduce buildings' carbon footprint by utilizing advanced insulation technologies, sustainable concrete, and incorporating waste materials in construction. We seek to promote a greener, more sustainable future and foster a circular economy with waste being a valuable resource.
				</span>
				<a href="#" role='button' className={styles.cardButton}>
					See More
				</a>
			</div>
		</Card>,
		<Card background='transparent' spacing='mediumSpacing'>
			<div className={styles.cardContent}>
				<h2 className={styles.cardTitle}>Agro Innovative</h2>
				<span className={styles.cardDescription}>
					We are developing a farm suite integrated with IoT to help farmers optimize their farm processes, reduce carbon footprint, and increase yields. From precision irrigation to soil health monitoring, our app is designed to transform agriculture into a more sustainable and efficient industry.
				</span>
				<a href="#" role='button' className={styles.cardButton}>
					See More
				</a>
			</div>
		</Card>,
		<Card background='transparent' spacing='mediumSpacing'>
			<div className={styles.cardContent}>
				<h2 className={styles.cardTitle}>Integrated sustainability reporting</h2>
				<span className={styles.cardDescription}>
					We're developing a new approach to sustainable supply chains for lithium and nickel in the EV industry. By leveraging blockchain tech and strict adherence to EU regulations, we're creating a system that ensures transparency, traceability, and ethical sourcing.
				</span>
				<a href="#" role='button' className={styles.cardButton}>
					See More
				</a>
			</div>
		</Card>,
	];
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Our Projects</h2>
			<Carousel cards={cards} />
		</div>
	)
}
