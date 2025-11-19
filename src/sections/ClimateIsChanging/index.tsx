import { Button } from 'components/buttons/button';
import styles from './styles.module.scss';

export function ClimateIsChanging() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.firstMessage}>Climate is changing!</h1>
      <h1 className={styles.secondMessage}>Are you?</h1>
      <p className={styles.thirdMessage}>
        We don't have to engage in grand, heroic actions to participate in
        change. Small acts, when multiplied by millions of people, can transform
        the world.
      </p>
      <div className={styles.buttonWrapper}>
        <Button
          background="gradient"
          fontSize="medium"
          href=""
          spacing="mediumSpacing"
        >
          Join Our Mission
        </Button>
      </div>
    </div>
  );
}
