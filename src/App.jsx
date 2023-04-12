import Summarycard from './components/Summarycard'
import data from '../data.json'

function App() {

  return (
    <div className="md:h-screen md:flex md:justify-center md:items-center md:p-4">
      <Summarycard data={data}/>
      <div className="flex-end">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Jimmy Huang</a>.
      </div>
    </div>
  )
}

export default App
