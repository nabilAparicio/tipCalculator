import styles from './Input.module.css';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string;
  icon?: React.ReactNode;
}
export default function Input({label, icon, ...rest}:InputProps) {

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'e' || e.key === '+' || e.key === '-'|| e.key === 'E'  ) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <label className={styles.inputLabel}>{label}</label>
      <div className={styles.inputContainer}>
      {icon}
      <input {...rest} className={styles.mainInput} onKeyDown={rest.type === 'number'? handleKeyDown : undefined} />
      </div>
    </div>
  )
}
