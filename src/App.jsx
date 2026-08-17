

// export default function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/bmi" element={<BMICalculator />} />
//         <Route path="/diet" element={<DietPlan />} />
//         <Route path="/workout" element={<Workout />} />
//         <Route path="/nutrition" element={<Nutrition />} />
//         <Route path="/progress" element={<Progress />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} /> */}
//       </Routes>

//       <Footer />
//     </>
//   );
// }



import { useEffect, useState } from 'react'

import './index.css'
import Header from './components/header'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BMICalculator from './components/BMICalculator'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import DietPlan from './pages/DietPlan'
import NotFound from './components/Not-Found'



function App() {
  const[bmi,setBmi] = useState();

  useEffect(()=>{
    const bmiResult = localStorage.getItem('result');
    setBmi(bmiResult);
  })
  
  return (
    <>
    <div className='dark:bg-gray-950 dark:text-white'>
    <Navbar />
    {/* <Header /> */}
    {/* <Home /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/DietApp/' element={<Home />} />
      <Route path='/bmi' element={<BMICalculator />} />
      <Route path='/diet' element={<DietPlan  />} />
      <Route path='*' element={<NotFound  />}/>

    </Routes>

    {/* <BMICalculator /> */}
    
    {/* <Main /> */}

     {/* <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/bmi" element={<BMICalculator />} />
        {/* <Route path="/diet" element={<DietPlan />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      {/* </Routes> */} 

      <Footer />
      </div>

    </>
  )
}

export default App
