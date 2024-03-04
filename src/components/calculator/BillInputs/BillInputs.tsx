import { useCallback, useContext, useState } from 'react';
import Button from '../../button/Button'
import Input from '../../input/Input'
import Text from '../../text/Text'
import styles from './BillInputs.module.css'
import { CalculatorContext } from '../Calculator';

interface BillInputsProps {
  className?: string;
}

export default function BillInputs({className}:BillInputsProps) {
  const [peopleError, setPeopleError] = useState<string | null>(null)
  const {contextValues, setContextValues} = useContext(CalculatorContext)

  const handleTip = useCallback((tip: number) => {
    setContextValues((prev: any) => ({...prev, tip}))
  },[setContextValues, contextValues.tip])

  const handleBillInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value
    if (+value < 0) {
      return
    }
    setContextValues((prev: any) => ({...prev, bill: value}))
  }, [setContextValues, contextValues.bill])

  const handlePeopleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '0') {
      setPeopleError('Can\'t be zero')
      setTimeout(() => {
        setPeopleError(null)
      }, 2500);
    }
    setContextValues((prev: any) => ({...prev, people: value}))
  } ,[setContextValues, contextValues.people])

  return (
    <div className={`${styles.mainContainer} ${className}`}>
      <Input onChange={handleBillInput} value={contextValues.bill} type='number' label='Bill' icon={<img width={11} height={17} src={'assets/images/icon-dollar.svg'} />}/>
      <div>
        <Text>Select Tip %</Text>
        <div className={styles.calcButtons}>
            <Button isActive={contextValues.tip === 5} onClick={()=> handleTip(5)}>5%</Button>
            <Button isActive={contextValues.tip === 10} onClick={()=> handleTip(10)}>10%</Button>
            <Button isActive={contextValues.tip === 15} onClick={()=> handleTip(15)}>15%</Button>
            <Button isActive={contextValues.tip === 25} onClick={()=> handleTip(25)}>25%</Button>
            <Button isActive={contextValues.tip === 50} onClick={()=> handleTip(50)}>50%</Button>
              <Input type='number' onChange={((e) => handleTip(+e.target.value))}  placeholder='Custom'/>
          </div>
      </div>
      <Input type='number' onChange={handlePeopleInput} label='Number of People' value={contextValues.people} errorMessage={peopleError} icon={<img width={13} height={16} src={'/assets/images/icon-person.svg'} />}/>
    </div>
  )
}
