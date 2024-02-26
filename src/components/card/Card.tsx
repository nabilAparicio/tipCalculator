import { CSSProperties, ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  shadow?: boolean;
  bgColor?: CSSProperties['backgroundColor'];
}
export default function Card({children, shadow, bgColor= '#FFF'}:CardProps) {

  return (
    <div className={`${styles.mainContainer} ${shadow && styles.shadow}`} style={{backgroundColor: bgColor}}>
      {children}
    </div>
  )
}
