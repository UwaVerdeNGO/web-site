import React from 'react'
import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { Spacer } from 'components/spacer'
import styles from './styles.module.scss'

export const AboutUs: React.FC = () => {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer>
				<Spacer height='47px' />
				<span className={styles.littleTitle}>About Us</span>
				<h2 className={styles.title} >
					We provide valuable resources, create opportunities for collaboration, and build a strong community focused on protecting the environment.
				</h2>
			</ContentContainer>
		</ContentSection>
	)
}

