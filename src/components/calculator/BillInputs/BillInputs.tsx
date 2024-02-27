import Button from '../../button/Button'
import Input from '../../input/Input'
import Text from '../../text/Text'
import styles from './BillInputs.module.css'

interface BillInputsProps {
  className?: string;
}

export default function BillInputs({className}:BillInputsProps) {
  return (
    <div className={`${styles.mainContainer} ${className}`}>
      <Input type='number' label='Bill' icon={<img width={11} height={17} src={'public/assets/images/icon-dollar.svg'} />}/>
      <div>
        <Text>Select Tip %</Text>
        <div className={styles.calcButtons}>
          <Button>5%</Button>
          <Button>10%</Button>
          <Button>15%</Button>
          <Button>25%</Button>
          <Button>50%</Button>
          <Input type='number' placeholder='Custom'/>
        </div>
      </div>
      <Input type='number' label='Number of People' icon={<img width={13} height={16} src={'public/assets/images/icon-person.svg'} />}/>
    </div>
  )
}
