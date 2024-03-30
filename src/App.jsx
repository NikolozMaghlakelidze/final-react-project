// import { useState } from 'react'
import './App.css'
import Products from './products/products'
import Headerbar from './header/header'
import './App.jsx'
import './products/ids'
import Productsrow from './products/productsrow/productsrow'
import TodoList  from '../src/everydayactivites/to-do list/todolist'
import Gamosacnobiricxvi from './everydayactivites/guessingnumber/guess'
import Darkmode from './everydayactivites/darkmode/darkmode'
import Slaideri from './everydayactivites/photo slider/slider'
import Randomricxvi from './everydayactivites/randomnumbergenerator/random'
import  Atwamiani from './everydayactivites/consoletimer/consoletimer'
import Randomquote from './everydayactivites/randomquote/quote'
import Counter from './everydayactivites/buttonzemomatebadakleba/btn'
import EmatebaItemi from './everydayactivites/Mapfuncqia/mapfuncqia'
import Quiz from './everydayactivites/quiz/quiz'
import Clock from './everydayactivites/clock/clock'
import Gamokitxva1 from './everydayactivites/gamokitxva/gamokitxva'
import Feedback from './everydayactivites/momxmareblisukukavshiri/ukukavshiri'
import WeatherAPI from './everydayactivites/API/api'
import Taimeri from './everydayactivites/timer/timer'
import SignUpForm from './sign up/signup'
import DelayedMessage from './everydayactivites/delay/delay'
import Facts from './everydayactivites/interestingfacts/facts'
import XiliList from './everydayactivites/xili/xili'
import Cifrebi from './everydayactivites/cifrebi/cifrebi'
import Misalmeba from './everydayactivites/hello/hello'
import Tenminutecountdown from './everydayactivites/Tenminutecountdown/Tenminutecountdown'




function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
   <div>
    <div>
    <Headerbar />
    </div>
    <div>
  <SignUpForm /> 
    </div>
    <div>
  <Darkmode />
</div>
<div>
  <Misalmeba />
</div>
<p className='app_p'>kits section</p>
   <div>
    <Products />
    </div>   
<div>
  <Productsrow />
  </div>
   <Slaideri />
   </div>
   <p className='app_p'>Everyday activites</p>
   <div>
    <Clock />
   </div>
   <div>
    <TodoList />
   </div>
   <div>
    <Gamosacnobiricxvi />
   </div>
   <div>
    <Randomricxvi />
    </div>
   <div>
    <Atwamiani />
   </div>
   <div>
    <Randomquote />
   </div>
   <div>
     <Counter />
   </div>
   <div>
    <EmatebaItemi />
   </div>
   <div>
<Quiz />
   </div>
   <div>
  {/* <Aqcia /> */}
  <Gamokitxva1 />
   </div>
   <div>
    {/* <CatApi /> */}
    <WeatherAPI />
   </div>
   <div>
    <Taimeri />
   </div>
   <div>
    <DelayedMessage />
   </div>
   <div>
    <Facts />
   </div>
   <div>
    <XiliList />
   </div>
   <div>
    <Cifrebi />
   </div>
   <div>
    <Tenminutecountdown />
   </div>
   <div>
   <Feedback />
   </div>
    </>
  )
}

export default App

