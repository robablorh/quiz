import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/quiz'  element ={<Quiz/>}/>
            <Route path='/results' element ={<Results/>}/>

        </Routes>
       


    </div>
  )
}

export default Router