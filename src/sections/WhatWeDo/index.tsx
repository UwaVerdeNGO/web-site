import { useState } from 'react';
import { ContentSection } from 'components/contentSection';
import { ContentContainer } from 'components/contentSection/contentContainer';
import { StepTab, StepTabItem } from 'components/stepTab';
import styles from "./styles.module.scss"

export function WhatWeDo() {
	const [activeTab, setActiveTab] = useState(0)
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<div className={styles.wrapper}>

					<div>
						<p className={`${styles.steps} ${activeTab === 0 ? styles.active : undefined}`} onClick={() => setActiveTab(0)}>What we do</p>
						<p className={`${styles.steps} ${activeTab === 1 ? styles.active : undefined}`} onClick={() => setActiveTab(1)}> areas of work</p>
					</div>

					<div className={styles.tabs}>
						<StepTab activeTab={activeTab}>
							<StepTabItem>
								<p className={styles.stepsTexts}>
									We empower people to drive positive change through hands-on sustainability projects. We provide valuable resources, create opportunities for collaboration, and build a strong community focused on protecting the environment.
								</p>
							</StepTabItem>
							<StepTabItem>
								<p className={styles.stepsTexts}>
									Lorem Ipsum
								</p>
							</StepTabItem>
						</StepTab>
					</div>

				</div>

			</ContentContainer>
		</ContentSection>
	);
}
