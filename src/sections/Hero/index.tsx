import { ContentSection } from 'components/contentSection';
import { ContentContainer } from 'components/contentSection/contentContainer';
import Terra from 'assets/images/terraTeste.png';
import styles from './styles.module.scss';
import { Button } from 'components/buttons/button';
import HeroBg from 'assets/images/hero-1920.png';

export function Hero() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.heroImgContainer}>
        <p className={styles.heroPara}>
          Promote sustainable living through eco- friendly products and
          innovative solutions.
        </p>
        <p className={styles.heroHeading}>
          hub for young minds and green action
        </p>
      </div>
    </div>
  );
}
