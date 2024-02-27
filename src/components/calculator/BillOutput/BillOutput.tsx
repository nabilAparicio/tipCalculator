import Button from "../../button/Button";
import Card from "../../card/Card";
import Text from "../../text/Text";
import style from './BillOutput.module.css'
interface BillOutputProps {
  className?: string;
}

export default function BillOutput({className}:BillOutputProps) {
  return (
    <Card bgColor='hsl(183, 100%, 15%)' className={`${className}`}>
      <div className={style.mainContainer}>
        <div>
      <div className={style.wrapper}>
        <div className={style.textContainer}>
          <Text clasName={style.text}>Tip Amount</Text>
          <Text clasName={style.textPerson}>/ person</Text>
        </div>
          <span className={style.resultNumbers}>$0.00</span>
      </div>
      <div className={style.wrapper}>
        <div className={style.textContainer}>
          <Text clasName={style.text}>Total</Text>
          <Text clasName={style.textPerson}>/ person</Text>
        </div>
          <span className={style.resultNumbers}>$0.00</span>
      </div>
      </div>
      <Button variant="secondary">RESET</Button>
      </div>
    </Card>
  )
}
