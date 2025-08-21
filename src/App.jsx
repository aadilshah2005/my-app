import React from 'react'
import Q1_Component from './Components/Q1_Component'
import Q2_Component from './Components/Q2_Component'
import Q3_Props from './Components/Q3_Props'
import Q4_Props from './Components/Q4_Props'
import Q5_useState from './Components/Q5_useState'
import Q6_useState from './Components/Q6_useState'


function App() {
  return (
    <>
      <Q1_Component />
      <Q2_Component />
      <Q3_Props name="Aadil Ali Shah"/>
      <Q4_Props name="Shan" age={19} email="shan@gmail.com"/>
      <Q5_useState />
      
    </>
  )
}

export default App
