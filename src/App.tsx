import { Header } from './components/header';
import { LeadCapture } from 'sections/LeadCapture';
import { HorizontalCards } from 'sections/HorizontalCards';
import { Spacer } from 'components/spacer';
import { OurValues } from 'sections/OurValues';
import { ImageSection } from 'sections/ImageSection';
import { FeaturedNews } from 'sections/FeaturedNews';
import { Comments } from 'sections/coments';
import Silvia from "assets/images/Silvia.png"
import { ClimateIsChanging } from 'sections/ClimateIsChanging';
import { Hero } from 'sections/hero';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<LeadCapture />
			<Spacer height='304px' />
			<HorizontalCards />
			<Spacer height='168px' />
			<OurValues />
			<Spacer height='158px' />
			<ImageSection />
			<Spacer height='180px' />
			<FeaturedNews />
			<Spacer height='197px' />
			<Comments comment='"Lorem ipsum dolor sit amet consectetur. Cras aliquet orci integer tempor ac quis ornare ultrices sed."' commentatorName='Silvia Prodanova' commentatorPosition='CTO' profilePhoto={Silvia} />
			<Spacer height='200px' />
			<ClimateIsChanging />
		</>
	);
}

export default App;
