import styles from './Button.module.css'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  isActive?: boolean;
}
export default function Button({children, isActive, variant='primary', ...rest }:ButtonProps) {

  const varianToShow = {
    primary: `${styles.variantPrimary} ${ isActive && styles.activePrimary}`,
    secondary: styles.variantSecondary
  }

  return (
    <button className={`${styles.mainButonComponent} ${varianToShow[variant]}`} {...rest}>
      {children}
    </button>
  )
}
