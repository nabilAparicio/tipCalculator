import Card from "../card/Card";
import BillInputs from "./BillInputs/BillInputs";
import BillOutput from './BillOutput/BillOutput';
import styles from './Calculator.module.css'

export default function Calculator() {
  return (
    <Card className={styles.mainContainer}>
      <BillInputs className={styles.BillInputs}/>
      <BillOutput className={styles.BillOutput}/>
    </Card>
  )
}
