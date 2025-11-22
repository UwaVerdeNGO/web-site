import { Carousel } from 'components/carousel';
import { Card } from 'components/card';
import styles from './styles.module.scss';

export function OurProjects() {
  const cards = [
    <Card background="transparent" spacing="none">
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>Agro Innovate</h2>
        <p className={styles.cardDescription}>
          We are developing a farm suite integrated with IoT to help farmers
          optimize their farm processes, reduce carbon footprint, and increase
          yields. From precision irrigation to soil health monitoring, our app
          is designed to transform agriculture into a more sustainable and
          efficient industry.
        </p>
        <a href="#" role="button" className={styles.cardButton}>
          Learn More
        </a>
      </div>
    </Card>,
    <Card background="transparent" spacing="none">
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>Tide</h2>
        <p className={styles.cardDescription}>
          To remove floating plastic waste from targeted coastlines in Spain,
          Portugal, Italy, and Croatia using nets and floating bin installation,
          while educating and empowering youth through partnerships with
          universities and high schools, turning waste into useful community
          products.
        </p>
        <a href="#" role="button" className={styles.cardButton}>
          Learn More
        </a>
      </div>
    </Card>,
    <Card background="transparent" spacing="none">
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>Ember</h2>
        <p className={styles.cardDescription}>
          To reduce human-caused wildfires in high-risk Mediterranean and
          Eastern European regions specifically Türkiye, Bulgaria, and Greece,
          also France by equipping communities, farmers, and youth with
          practical wildfire prevention skills, reinforcing existing local
          initiatives, and amplifying public awareness.
        </p>
        <a href="#" role="button" className={styles.cardButton}>
          Learn More
        </a>
      </div>
    </Card>,
    <Card background="transparent" spacing="none">
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>Shell</h2>
        <p className={styles.cardDescription}>
          To protect and restore sea turtle populations by creating safe nesting
          environments, rearing hatchlings, and strengthening biodiversity in
          Greece (Zakynthos), Türkiye (Dalyan), and Cyprus (Lara Beach).
        </p>
        <a href="#" role="button" className={styles.cardButton}>
          Learn More
        </a>
      </div>
    </Card>,
  ];
  return (
    <div className={styles.wrapper} id="ourProjects">
      <h2 className={styles.title}>Projects</h2>
      <Carousel cards={cards} />
    </div>
  );
}
