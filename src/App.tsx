import './App.css'
import Calculator from './components/calculator/Calculator'

function App() {

  return (
    <div className='mainComponent'>
      <img src='assets/images/logo.svg' alt='main calculator app logo' className='logo'/>
      <Calculator/>
    </div>
  )
}

export default App
