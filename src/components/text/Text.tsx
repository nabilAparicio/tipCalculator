import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
  clasName?: string;
}
export default function Text({children, clasName}:TextProps) {
  return (
    <span className={`${styles.text} ${clasName}`}>{children}</span>
  )
}
