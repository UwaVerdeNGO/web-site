import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { NewsCard } from 'components/newsCard'
import Mill from "assets/images/mill.png"
import PeopleWithSuits from "assets/images/peopleWithSuits.png"
import Bottles from "assets/images/bottles.png"
import styles from "./styles.module.scss"

export function FeaturedNews() {
	return (

		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Featured News</h2>
					<div className={styles.cards}>
						<NewsCard category='research paper' imageAlt='Mill' imageSrc={Mill} title='Suspendisse lectus iaculis odio netus' />
						<NewsCard category='blog' imageAlt='Plastic Bottles' imageSrc={Bottles} title='Egestas ut pretium tortor dolor lobortis vitae' />
						<NewsCard category='blog' imageAlt='People With Suit' imageSrc={PeopleWithSuits} title='Pharetra donec ultrices dictumst ' />
					</div>
				</div>
			</ContentContainer>
		</ContentSection>
	)
}
