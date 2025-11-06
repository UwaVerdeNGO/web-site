import { Header } from 'components/header';
import { LeadCapture } from 'sections/LeadCapture';
import { HorizontalCards } from 'sections/HorizontalCards';
import { OurValues } from 'sections/OurValues';
import { ImageSection } from 'sections/ImageSection';
import { FeaturedNews } from 'sections/FeaturedNews';
import { ClimateIsChanging } from 'sections/ClimateIsChanging';
import { Hero } from 'sections/Hero';
import { WhatWeDo } from 'sections/WhatWeDo';
import { Newsletter } from 'sections/Newsletter';
import { Footer } from 'components/footer';
import { OurProjects } from 'sections/OurProjects';
import { Comments } from 'sections/Comments';
import Silvia from "assets/images/Silvia.png"

function Home() {
	return (
		<div style={{ overflowX: '-moz-hidden-unscrollable' }}>
			<Header />
			<Hero />
			<LeadCapture />
			<WhatWeDo />
			<HorizontalCards />
			<OurValues />
			<ImageSection />
			<OurProjects />
			<FeaturedNews />
			<Comments comment={`"Learn as you grow, grow as you learn – that's what UwaVerde offers. It's a chance to be part of a meaningful effort for a sustainable future, while simultaneously growing knowledge and skills through collaborative learning."`} commentatorName='Silvia Prodanova' commentatorPosition='CCO' profilePhoto={Silvia} />
			<ClimateIsChanging />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default Home;
