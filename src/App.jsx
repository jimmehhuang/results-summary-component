import MainCard from './components/MainCard'
import Summarycard from './components/Summarycard'

function App() {

  return (
    <div className="md:h-screen md:flex md:justify-center md:items-center md:p-4">
      <MainCard/>
      <Summarycard/>
      <div className="">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Jimmy Huang</a>.
      </div>
    </div>
  )
}

export default App
