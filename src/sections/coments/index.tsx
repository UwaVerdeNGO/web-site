import { ContentContainer } from 'components/contentSection/contentContainer'
import { ContentSection } from 'components/contentSection'
import styles from "./styles.module.scss"

type CommentsProps = {
	comment: string;
	profilePhoto: string;
	commentatorName: string;
	commentatorPosition: string
}

export function Comments({ comment, commentatorName, commentatorPosition, profilePhoto }: CommentsProps) {
	return (
		<ContentSection sectionBackground='almostWhiteBackground'>
			<ContentContainer >
				<div className={styles.wrapper}>
					<h2 className={styles.comment}>{comment}</h2>
					<div className={styles.commentOwner}>
						<img src={profilePhoto} alt={`${commentatorName} profile`} className={styles.photo} />
						<span className={styles.name}>{commentatorName}</span>
						<span className={styles.position}>{commentatorPosition}</span>
					</div>
				</div>
			</ContentContainer>
		</ContentSection>
	)
}
