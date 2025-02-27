import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { NewsCard } from 'components/newsCard'
import Mill from "assets/images/1.png"
import PeopleWithSuits from "assets/images/2.png"
import Bottles from "assets/images/3.png"
import styles from "./styles.module.scss"

export function FeaturedNews() {
	return (

		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Featured News</h2>
					<div className={styles.cards}>
						<NewsCard category='blog' imageAlt='Mill' imageSrc={Mill} title='Regenerative Agriculture: A Path to a Sustainable Future' />
						<NewsCard category='blog' imageAlt='Plastic Bottles' imageSrc={Bottles} title='Regenerative Agriculture: A Path to a Sustainable Future' />
						<NewsCard category='blog' imageAlt='People With Suit' imageSrc={PeopleWithSuits} title='Regenerative Agriculture: A Path to a Sustainable Future ' />
					</div>
				</div>
			</ContentContainer>
		</ContentSection>
	)
}
