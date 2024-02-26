import Input from '../../input/Input'

export default function BillInputs() {
  return (
    <div>
      <Input type='number' label='Bill' icon={<img width={11} height={17} src={'public/assets/images/icon-dollar.svg'} />}/>
    </div>
  )
}
