import React from 'react';
import styles from './styles.module.scss';

type NewsCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  category: string;

  date: string;
};
export const NewsCard: React.FC<NewsCardProps> = ({
  category,
  imageSrc,
  title,
  imageAlt,

  date,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} className={styles.zoomImage} />
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <div className={styles.categoryContainer}>
          <p className={styles.category}>{category}</p>
          <div className={styles.dot}></div>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};
