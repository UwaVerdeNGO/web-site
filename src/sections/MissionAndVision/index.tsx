import React from 'react';

import { Spacer } from 'components/spacer';
import styles from './styles.module.scss';

export const MissionAndVision: React.FC = () => {
  return (
    
        // <Spacer height="140px" className={styles.spacerSection} />
        <div className={styles.contentGrid}>
          <div className={styles.contentWrapperMission}>
            <div className={styles.alignedContent}>
              <h2 className={styles.title}>Mission</h2>
              <p className={styles.subtext}>
                Our mission is to help industries reduce their carbon footprint,
                equip young people for sustainability careers, and foster
                collaboration to achieve tangible climate outcomes.
              </p>
            </div>
          </div>

          <div className={styles.contentWrapperVision}>
            <div className={styles.alignedContent}>
              <h2 className={styles.title}>Vision</h2>
              <p className={styles.subtext}>
                Pioneering a future where industries embrace sustainability,
                young people lead the charge, and zero carbon emissions pave the
                way for a thriving planet.
              </p>
            </div>
          </div>
        </div>
  )
        // <Spacer height="140px" className={styles.spacerSection} />
     
};
