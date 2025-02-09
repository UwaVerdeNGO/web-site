import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from "./styles.module.scss"
import "./accordionStyle.scss"

type Data = {
	header: string;
	body: string;
}

type AccordionData = {
	data: Data[]
}

export const AccordionComponent: FC<AccordionData> = ({ data }) => {
	return (
		<>
			<h1 className={styles.sectionTitle}>Our Values</h1>
			<Accordion flush alwaysOpen>
				{data.map((item, index) => (
					<Accordion.Item eventKey={index.toString()}>
						<Accordion.Header>
							<h2 className={styles.headerText}>{item.header}</h2>
						</Accordion.Header>
						<Accordion.Body>
							<p className={styles.bodyText}>{item.body}</p>
						</Accordion.Body>
					</Accordion.Item>
				))}

			</Accordion>
		</>
	);
}
