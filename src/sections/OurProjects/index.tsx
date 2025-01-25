import React from 'react'
import { Carousel } from 'components/carousel';
import { NewsCard } from 'components/newsCard';

export function OurProjects() {
	const cards = [
		<NewsCard category='research paper' imageAlt='Mill' imageSrc={"https://logowik.com/content/uploads/images/562_audi.jpg"} title='Suspendisse lectus iaculis odio netus' />,
		<NewsCard category='blog' imageAlt='Plastic Bottles' imageSrc={"https://i.pinimg.com/736x/4d/02/6a/4d026af201626444c0a7ea930d5a1a62.jpg"} title='Egestas ut pretium tortor dolor lobortis vitae' />,
		<NewsCard category='blog' imageAlt='People With Suit' imageSrc={"https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"} title='Pharetra donec ultrices dictumst ' />,
	];
	return (
		<>
			<div>index</div>
			<Carousel cards={cards} />
		</>
	)
}
