import { useContext } from "react";
import Button from "../../button/Button";
import Card from "../../card/Card";
import Text from "../../text/Text";
import style from './BillOutput.module.css'
import { CalculatorContext } from "../Calculator";
interface BillOutputProps {
  className?: string;
}

export default function BillOutput({className}:BillOutputProps) {
    const {contextValues, setContextValues} = useContext(CalculatorContext)
    const tipAmount = (contextValues.bill * contextValues.tip) / 100;
    const total = (contextValues.bill + tipAmount) / +contextValues.people;

    const totalToShow = total === Infinity || isNaN(total) ? '0.00' : total.toFixed(2);

    const handleReset = () => {
      setContextValues({
        bill: '',
        tip: 0,
        people: ''
      })
    }

  return (
    <Card bgColor='hsl(183, 100%, 15%)' className={`${className}`}>
      <div className={style.mainContainer}>
        <div>
      <div className={style.wrapper}>
        <div className={style.textContainer}>
          <Text clasName={style.text}>Tip Amount</Text>
          <Text clasName={style.textPerson}>/ person</Text>
        </div>
          <span className={style.resultNumbers}>$ {tipAmount.toFixed(2)}</span>
      </div>
      <div className={style.wrapper}>
        <div className={style.textContainer}>
          <Text clasName={style.text}>Total</Text>
          <Text clasName={style.textPerson}>/ person</Text>
        </div>
          <span className={style.resultNumbers}>$ {totalToShow}</span>
      </div>
      </div>
      <Button onClick={handleReset} variant="secondary">RESET</Button>
      </div>
    </Card>
  )
}
