import styles from './Input.module.css';
import Text from '../text/Text';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label?: string;
  icon?: React.ReactNode;
  errorMessage?: string;
}
export default function Input({label, icon, errorMessage, ...rest}:InputProps) {
  const isError = !!errorMessage;
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'e' || e.key === '+' || e.key === '-'|| e.key === 'E'  ) {
      e.preventDefault();
    }
  };

  return (
    <div>
      {!!label && <Text>{label}</Text>}
      <div className={`${styles.inputContainer} ${isError && styles.error}`}>
      {icon}
      <input {...rest} className={styles.mainInput} onKeyDown={rest.type === 'number'? handleKeyDown : undefined} />
      <span className={styles.errorMessage}>{errorMessage}</span>
      </div>
    </div>
  )
}
