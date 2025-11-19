import { NewsCard } from 'components/newsCard';
import Mill from 'assets/images/mill.png';
import PeopleWithSuits from 'assets/images/peopleWithSuits.png';
import Bottles from 'assets/images/bottles.png';
import styles from './styles.module.scss';

export function FeaturedNews() {
  return (
    <div className={styles.wrapper} id="featured-news">
      <h2 className={styles.title}>Featured News</h2>
      <table className={styles.cards}>
        <tbody className={styles.cardTableBody}>
          <tr className={styles.cardRow}>
            <td className={styles.cardData}>
              <NewsCard
                category="Research paper"
                date="October 8,2025"
                imageAlt="Mill"
                imageSrc={Mill}
                title="Empowering Cities Through Wind: Evaluating the Social and Environmental Impact of Small-Scale Turbine Systems"
              />
            </td>
          </tr>

          <tr className={styles.cardRow}>
            <td className={styles.cardData}>
              <NewsCard
                category="blog"
                date="June 12,2025"
                imageAlt="Plastic Bottles"
                imageSrc={Bottles}
                title="From Waste to Wonder: How UwaVerde Transforms Everyday Materials into Learning Toolse"
              />
            </td>
          </tr>
          <tr className={styles.cardRow}>
            <td className={styles.cardData}>
              <NewsCard
                category="blog"
                date="May 17,2025"
                imageAlt="People With Suit"
                imageSrc={PeopleWithSuits}
                title="UwaVerde Launches ‘Community Climate Labs’ in Berlin and Lisbon"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
