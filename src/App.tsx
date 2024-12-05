import { Hero } from 'sections/Hero';
import { Header } from './components/header';
import { LeadCapture } from 'sections/LeadCapture';
import { HorizontalCards } from 'sections/HorizontalCards';
import { Spacer } from 'components/spacer';
import { OurValues } from 'sections/OurValues';


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
		</>
	);
}

export default App;
