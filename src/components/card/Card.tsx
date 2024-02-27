import { CSSProperties, ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode;
  shadow?: boolean;
  bgColor?: CSSProperties['backgroundColor'];
  className?: string;
}
export default function Card({children, shadow, bgColor= '#FFF', className ='', ...rest}:CardProps) {


  return (
    <div className={`${styles.mainContainer} ${className} ${shadow && styles.shadow}`} style={{backgroundColor: bgColor}} {...rest}>
      {children}
    </div>
  )
}
