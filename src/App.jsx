import Card from './components/Card'
import Summarycard from './components/Summarycard'

function App() {

  return (
    <div class="flex flex-col justify-center items-center">
      <Card/>
      <Summarycard/>
      <div class="flex-end">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Jimmy Huang</a>.
      </div>
    </div>
  )
}

export default App
