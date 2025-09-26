import { ContentSection } from 'components/contentSection';
import { ContentContainer } from 'components/contentSection/contentContainer';
import { Card } from 'components/card';
import BlackArrow from 'assets/icons/arrow.png';
import WhiteArrow from 'assets/icons/whiteArrowFoward.png';
import PurpleArrow from 'assets/icons/purpleArrow.png';
import styles from './styles.module.scss';
import { useState } from 'react';

export function HorizontalCards() {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);
  const [isCard3Hovered, setIsCard3Hovered] = useState(false);
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);
  const [isButton3Hovered, setIsButton3Hovered] = useState(false);

  return (
    <ContentSection sectionBackground="almostWhiteBackground">
      <ContentContainer>
        <div className={styles.wrapper}>
          <div
            onMouseEnter={() => setIsCard1Hovered(true)}
            onMouseLeave={() => setIsCard1Hovered(false)}
          >
            <Card
              background={isCard1Hovered ? 'purple' : 'black'}
              spacing="none"
            >
              <div className={styles.content}>
                <div>
                  <h2
                    className={
                      isCard1Hovered ? styles.cardTextHovered : styles.cardText
                    }
                  >
                    {isCard1Hovered
                      ? 'Become a Partner'
                      : 'Are you a company seeking to drive sustainability?'}
                  </h2>
                  {isCard1Hovered && (
                    <h3 className={styles.cardHoveredSubtitle}>
                      Partner with UwaVerde. Innovate, collaborate, and make a
                      positive impact.
                    </h3>
                  )}
                </div>
                <a
                  href="#"
                  role="button"
                  className={styles.arrowButton}
                  onMouseEnter={() => setIsButton1Hovered(true)}
                  onMouseLeave={() => setIsButton1Hovered(false)}
                >
                  <img
                    src={
                      isCard1Hovered
                        ? isButton1Hovered
                          ? WhiteArrow
                          : PurpleArrow
                        : BlackArrow
                    }
                    alt="arrow"
                  />
                </a>
              </div>
            </Card>
          </div>

          <div
            onMouseEnter={() => setIsCard2Hovered(true)}
            onMouseLeave={() => setIsCard2Hovered(false)}
          >
            <Card
              background={isCard2Hovered ? 'purple' : 'black'}
              spacing="none"
            >
              <div className={styles.content}>
                <div>
                  <h2
                    className={
                      isCard2Hovered ? styles.cardTextHovered : styles.cardText
                    }
                  >
                    {isCard2Hovered ? 'Team Up' : 'Have a great idea?'}
                  </h2>
                  {isCard2Hovered && (
                    <h3 className={styles.cardHoveredSubtitle}>
                      Collaborate with us to turn your vision into reality. Join
                      our network of sustainability professionals and find the
                      perfect project partner.
                    </h3>
                  )}
                </div>
                <a
                  href="#"
                  role="button"
                  className={styles.arrowButton}
                  onMouseEnter={() => setIsButton2Hovered(true)}
                  onMouseLeave={() => setIsButton2Hovered(false)}
                >
                  <img
                    src={
                      isCard2Hovered
                        ? isButton2Hovered
                          ? WhiteArrow
                          : PurpleArrow
                        : BlackArrow
                    }
                    alt="arrow"
                  />
                </a>
              </div>
            </Card>
          </div>

          <div
            onMouseEnter={() => setIsCard3Hovered(true)}
            onMouseLeave={() => setIsCard3Hovered(false)}
          >
            <Card
              background={isCard3Hovered ? 'purple' : 'black'}
              spacing="none"
            >
              <div className={styles.content}>
                <div>
                  <h2
                    className={
                      isCard3Hovered ? styles.cardTextHovered : styles.cardText
                    }
                  >
                    {isCard3Hovered
                      ? 'Share Knowledge'
                      : 'Ready to share your expertise?'}
                  </h2>
                  {isCard3Hovered && (
                    <h3 className={styles.cardHoveredSubtitle}>
                      Ready to share your expertise? Become part of our events,
                      workshops, and more to inspire others and drive change.
                    </h3>
                  )}
                </div>
                <a
                  href="#"
                  role="button"
                  className={styles.arrowButton}
                  onMouseEnter={() => setIsButton3Hovered(true)}
                  onMouseLeave={() => setIsButton3Hovered(false)}
                >
                  <img
                    src={
                      isCard3Hovered
                        ? isButton3Hovered
                          ? WhiteArrow
                          : PurpleArrow
                        : BlackArrow
                    }
                    alt="arrow"
                  />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </ContentContainer>
    </ContentSection>
  );
}
