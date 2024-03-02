import { createContext, useState } from "react";
import Card from "../card/Card";
import BillInputs from "./BillInputs/BillInputs";
import BillOutput from './BillOutput/BillOutput';
import styles from './Calculator.module.css'



export const CalculatorContext = createContext({} as any)

export default function Calculator() {

  const [contextValues, setContextValues] = useState({
    bill: 0,
    tip: 0,
    people: ''
  })

  return (
    <CalculatorContext.Provider value={{contextValues, setContextValues}}>
      <Card className={styles.mainContainer}>
        <BillInputs className={styles.BillInputs}/>
        <BillOutput className={styles.BillOutput}/>
      </Card>
    </CalculatorContext.Provider>
  )
}
