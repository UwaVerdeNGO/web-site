import { ContentSection } from 'components/contentSection';
import { ContentContainer } from 'components/contentSection/contentContainer';
import Fields from 'assets/images/fields.jpg';
import styles from './styles.module.scss';

export function ImageSection() {
  return (
    <div className={styles.imgContainer}>
      <img src={Fields} alt="fields" className={styles.image} />
    </div>
  );
}
