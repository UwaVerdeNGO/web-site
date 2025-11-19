import { useState } from 'react';
import { ContentSection } from 'components/contentSection';
import { ContentContainer } from 'components/contentSection/contentContainer';
import { StepTab, StepTabItem } from 'components/stepTab';
import { areasOfWork } from './areasOfWork';
import styles from './styles.module.scss';
import { Spacer } from 'components/spacer';

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className={styles.contentWrapper}>
        <div className={styles.whatWeDo}>
          <p className={styles.title}>What We Do</p>
          <p className={styles.para}>
            We empower people to drive positive change through hands-on
            sustainability projects. We provide valuable resources, create
            opportunities for collaboration, and build a strong community
            focused on protecting the environment.
          </p>
        </div>
        <div className={styles.areaWork}>
          <p className={styles.areaTitle}>Areas Of Work</p>
          <div className={styles.carousel}>
            <div className={styles.itemGroup}>
              {areasOfWork.map((item, index) => (
                <div className={styles.workItem} key={index}>
                  {item.area}
                </div>
              ))}
            </div>
			<div className={styles.itemGroup} aria-hidden>
              {areasOfWork.map((item, index) => (
                <div className={styles.workItem} key={index}>
                  {item.area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
