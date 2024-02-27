import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
}
export default function Text({children}:TextProps) {
  return (
    <span className={styles.text}>{children}</span>
  )
}
