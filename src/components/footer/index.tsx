import { FC } from 'react';
import { Spacer } from 'components/spacer';
import styles from './styles.module.scss';
import Logo from 'assets/icons/whiteLogo.png';
import whiteArrow from 'assets/icons/whiteArrowFoward.png';

export const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Spacer className={styles.topSpacer} />
      <div className={styles.topDivision}>
        <div className={styles.newsLetter}>
          <h2 className={styles.stayTitle}>Stay Ahead</h2>
          <p className={styles.newsInfo}>
            Subscribe for events, news, and updates
          </p>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputEmail}
              placeholder="enter e-mail address"
            />
            <button className={styles.emailBtn}>
              <img
                src={whiteArrow}
                alt="white-arrow"
                className={styles.arrowImg}
              />
            </button>
          </div>
        </div>
        <div className={styles.topRightDivision}>
          <div className={styles.contact}>
            <p className={styles.contactTitle}>Contact</p>
            <p className={styles.contactDetails}>info@uwaverde.com</p>
            <p className={styles.contactDetails}>
              Palmaille 96, 22767, Hamburg Germany
            </p>
          </div>
          <div className={styles.connect}>
            <p className={styles.connectTitle}>Connect</p>
            <a href="" className={styles.connectDetails}>
              LinkedIn
            </a>
            <a href="" className={styles.connectDetails}>
              Instagram
            </a>
          </div>
          <div className={styles.discover}>
            <p className={styles.discoverTitle}>Discover</p>
            <a href="/about-us" className={styles.discoverDetails}>
              About Us
            </a>
            <a href="#" className={styles.discoverDetails}>
              Our People
            </a>
            <a href="#" className={styles.discoverDetails}>
              Projects
            </a>
            <a href="#" className={styles.discoverDetails}>
              Collaborate
            </a>
            <a href="#" className={styles.discoverDetails}>
              News & Events
            </a>
            <a href="#" className={styles.discoverDetails}>
              Careers
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomDivision}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <div className={styles.copyRightsSection}>
          <p className={styles.copyRights}>
            © 2025 UwaVerde. All Rights Reserved.
          </p>
          <div className={styles.policyContainer}>
            <a href="" className={styles.policyLink}>
              Privacy Policy
            </a>
            <a href="" className={styles.policyLink}>
              Terms of Use
            </a>
          </div>
        </div>
      </div>
      {/* <Spacer className={styles.bottomSpacer} /> */}
    </div>
  );
};
