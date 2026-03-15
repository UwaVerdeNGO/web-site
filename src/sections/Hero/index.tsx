import styles from './styles.module.scss';

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
