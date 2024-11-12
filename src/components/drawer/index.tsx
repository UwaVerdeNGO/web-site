import React, { useState } from 'react';
import styles from './styles.module.scss';

interface DrawerProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}


export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {

	return (
		<div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
			<button onClick={onClose}>teste</button>
			<div className={styles["drawer-content"]}>
				{children}
			</div>
			<div className={styles['drawer-overlay']} onClick={onClose} />
		</div>
	);
};