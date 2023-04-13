import Resultscard from './components/Resultscard'
import Summarycard from './components/Summarycard'
import data from '../data.json'

function App() {

  return (
    <div className="md:h-screen md:flex md:justify-center md:items-center md:p-4">
      <Resultscard/>
      <Summarycard data={data}/>
    </div>
  )
}

export default App
