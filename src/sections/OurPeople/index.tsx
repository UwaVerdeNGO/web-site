import React from 'react'
import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { ProfileCard } from 'components/profileCard'
import { People } from './people'
import styles from './styles.module.scss'

export function OurPeople() {
	return (
		<ContentSection sectionBackground='grayBackground'>
			<ContentContainer>
				<div className={styles.wrapper} id="our-people">
					<h1 className={styles.title}>Our People</h1>

					<div className={styles.cards}>
						{People.map(person => (
							<ProfileCard key={person.name} image={person.image} name={person.name} role={person.role} />
						))}
					</div>
				</div>
			</ContentContainer>
		</ContentSection>
	)
}

