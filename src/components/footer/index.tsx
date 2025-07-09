import { FC } from 'react'
import { ContentSection } from 'components/contentSection'
import { ContentContainer } from 'components/contentSection/contentContainer'
import { Spacer } from 'components/spacer'
import styles from "./styles.module.scss"
import Logo from "assets/icons/whiteLogo.png"

export const Footer: FC = () => {
	return (
		<ContentSection sectionBackground='blackBackground'>
			<ContentContainer>
				<Spacer className={styles.topSpacer} />
				<div className={styles.topDivision}>
					<div className={styles.info}>
						<img src={Logo} alt="Logo" className={styles.logo} />
						<p className={styles.address}>
							Palmaille 96, 22767, Hamburg
						</p>
					</div>
					<div className={styles.aboutUs}>
						<div className={styles.aboutUsSections}>
							<p>
								Connect
							</p>
							<a href='mailto:admin@uwaverde.com' target='_blank'>
								Contact Us
							</a>
							{/* <a href='#' target='_blank'>
								Careers
							</a>
							<a href='#' target='_blank'>
								FAQ
							</a> */}
						</div>
						{/* <div className={styles.aboutUsSections}>
							<p>
								Organization
							</p>
							<a href='#' target='_blank'>
								About Us
							</a>
							<a href='#' target='_blank'>
								Our People
							</a>
							<a href='#' target='_blank'>
								Projects
							</a>
						</div> */}
						<div className={styles.aboutUsSections}>
							<p>
								Follow Us
							</p>
							<a href='https://www.linkedin.com/company/uwaverde/' target='_blank' rel="noreferrer">
								Linkedin
							</a>
							<a href='https://www.instagram.com/uwa.verde/' target='_blank' rel="noreferrer">
								Instagram
							</a>
						</div>
					</div>
				</div>

				<div className={styles.bottomDivision}>
					<p className={styles.copyRights}>
						© 2024 UwaVerde. All Rights Reserved.
					</p>
					{/* <div className={styles.documents}>
						<a href="#" className={styles.linkToDocument}>Privacy Policy</a>
						<Spacer width='36px' />
						<a href="#" className={styles.linkToDocument}> Terms of Use</a>
					</div> */}
				</div>
				<Spacer className={styles.bottomSpacer} />
			</ContentContainer>
		</ContentSection>
	)
}
