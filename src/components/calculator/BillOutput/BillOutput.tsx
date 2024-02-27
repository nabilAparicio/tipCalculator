import Card from "../../card/Card";

interface BillOutputProps {
  className?: string;
}

export default function BillOutput({className}:BillOutputProps) {
  return (
    <Card bgColor='hsl(183, 100%, 15%)' className={`${className}`}>BillOutput</Card>
  )
}
