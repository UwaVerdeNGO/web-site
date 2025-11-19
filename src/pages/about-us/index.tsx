import Banner from 'assets/images/about-banner.png';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { Spacer } from 'components/spacer';
import { MissionAndVision } from 'sections/MissionAndVision';
import styles from './styles.module.scss';
import { OurValues } from 'sections/OurValues';
import { OurProjects } from 'sections/OurProjects';
import { Newsletter } from 'sections/Newsletter';
import { OurPeople } from 'sections/OurPeople';

function AboutUsPage() {
  return (
    <div style={{ overflowX: '-moz-hidden-unscrollable' }}>
      <Header />
      <div className={styles.banner}>
        <img src={Banner} alt="Green area with a river in the middle" />
        <div className={styles.aboutUsSection}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.about}>
            We provide valuable resources, create opportunities for
            collaboration, and build a strong community focused on protecting
            the environment.
          </p>
        </div>
      </div>
      <MissionAndVision />
      <Spacer height="90px" className={styles.spacerSection} />
      <OurValues />
      <OurProjects />
      <OurPeople />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
