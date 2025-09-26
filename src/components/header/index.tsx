import { FC, useState } from 'react';
import { Button } from 'components/buttons/button';
import { Drawer } from 'components/drawer';
import HamburguerMenu from 'assets/icons/menu.png';
import { Card } from 'components/card';
import { Spacer } from 'components/spacer';
import Logo from 'assets/icons/logo.png';
import Login from 'assets/icons/login.png';
import styles from './styles.module.scss';

export const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpenAndClose = () => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    } else {
      setIsDrawerOpen(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleDrawerOpenAndClose} className={styles.menu}>
        <img src={HamburguerMenu} alt="Hamburguer Menu Icon" />
      </button>

      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerOpenAndClose}>
        <div className={styles.drawerContentWrapper}>
          <div className={styles.drawerLeftContent}>
            <h2>Menu</h2>
            <nav role="navigation">
              <ul className={styles.drawerMenu}>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/about-us#our-people">Our people</a>
                </li>
                <li>
                  <a href="/#ourProjects">Projects</a>
                </li>
                <li>
                  <a href="#">Eco-learning</a>
                </li>
                <li>
                  <a href="#">Collaborate</a>
                </li>
                <li>
                  <a href="/#featured-news">News & events</a>
                </li>
                <li>
                  <a href="#">careers</a>
                </li>
                <li>
                  <a href="#contact-us">contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.drawerRightContent}>
            <Card
              background="gradientPurple"
              spacing="bigSpacing"
              className={styles.hideCardForMobile}
            >
              <h2 className={styles.drawerCardTextTagline}>
                Organic make boys slipstream office diarize level bandwagon.
                Shower mint boys win-win?
              </h2>
              <div className={styles.cardButtonWrapper}>
                <Button
                  fontSize="medium"
                  background="white"
                  href="#"
                  spacing="mediumSpacing"
                >
                  Let's talk
                </Button>
              </div>
            </Card>

            <Spacer height="29px" className={styles.cardSpacer} />
            <Card
              background="gray"
              spacing="bigSpacing"
              className={styles.hideCardForMobile}
            >
              <div className={styles.memberPortalCard}>
                <h2 className={styles.drawerCardText}>Member Portal</h2>
                <img src={Login} alt="Login" />
              </div>
            </Card>
          </div>
        </div>
      </Drawer>

      <a href="/">
        <img src={Logo} alt="UwaVerde Logo" className={styles.logo} />
      </a>

      <div className={styles.buttons}>
        <Button
          href="/member-login"
          background="outlined"
          fontSize="small"
          spacing="smallSpacing"
        >
          Sign In
        </Button>
        <Button
          href="#"
          background="purple"
          fontSize="small"
          spacing="smallSpacing"
        >
          Donate
        </Button>
      </div>
    </div>
  );
};
