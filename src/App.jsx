import { useSelector, useDispatch } from "react-redux";
import React from "react";
import './index.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { More } from "./jsx/more";
import { Home } from "./jsx/home";
import { useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
// npm install react-transition-group

function App() {
  let [blurState, setBlur] = useState(null)
  const blurFlag = useRef()

  let [rate, setRate] = useState('')

  const location = useLocation()
  

  return (
  
    <div className="App">
       <SwitchTransition mode="out-in">    
         <CSSTransition 
          classNames='transition'
          key={location.key}
          // выше для переходов 
          timeout={500}>
            
            <Routes 
            location={location} //для переходов
            >
               <Route path="/" element={<Home blurState={blurState} setBlur={setBlur} blurFlag={blurFlag}></Home>}></Route>
               <Route path="/more" element={<More rate={rate} setRate={setRate}></More>}></Route>
            </Routes>

         </CSSTransition>
       </SwitchTransition>
      
            {/* enf of app */}
    </div>
  );
}

export default App;
