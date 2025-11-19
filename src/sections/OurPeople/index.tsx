import React from 'react';

import { ProfileCard } from 'components/profileCard';
import { People } from './people';
import styles from './styles.module.scss';

export function OurPeople() {
  return (
    <>
      <div className={styles.wrapper} id="our-people">
        <h1 className={styles.title}>Our People</h1>

        <div className={styles.cards}>
          {People.map((person) => (
            <ProfileCard
              key={person.name}
              image={person.image}
              name={person.name}
              role={person.role}
            />
          ))}
        </div>
        <div className={styles.countrySection}>
          <p className={styles.countryTitle}>We Are From</p>
          <div className={styles.country}>
			<p className={styles.countryName}>Germany</p>
			<p className={styles.countryName}>Netherlands</p>
			<p className={styles.countryName}>Brazil</p>
			<p className={styles.countryName}>Portugal</p>
			<p className={styles.countryName}>Spain</p>
			<p className={styles.countryName}>Sweden</p>
			<p className={styles.countryName}>Slovakia</p>
			<p className={styles.countryName}>Hungary</p>
		  </div>
        </div>
      </div>
    </>
  );
}
