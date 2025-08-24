import Banner from 'assets/images/banner.png'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { Spacer } from 'components/spacer'
import { AboutUs } from 'sections/AboutUs'
import { MissionAndVision } from 'sections/MissionAndVision'
import styles from './styles.module.scss'
import { OurValues } from 'sections/OurValues'
import { OurProjects } from 'sections/OurProjects'
import { Newsletter } from 'sections/Newsletter'
import { OurPeople } from 'sections/OurPeople'

function AboutUsPage() {
	return (
		<div style={{ overflowX: '-moz-hidden-unscrollable' }}>
			<Header />
			<div className={styles.banner}>
				<img src={Banner} alt="Green area with a river in the middle" />
			</div>

			<AboutUs />
			<MissionAndVision />
			<Spacer height='90px' />
			<OurValues />
			<OurPeople />
			<OurProjects />
			<Newsletter />
			<Footer />
		</div>
	)
}

export default AboutUsPage