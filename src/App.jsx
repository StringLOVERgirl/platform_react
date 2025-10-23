import { useSelector, useDispatch, useStore } from "react-redux";
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
  const blurFlag = useRef(null)

  let [firstTransition ,settrans]= useState(false)

  let [rate, setRate] = useState('')

  const location = useLocation()

  let [userAgent, setuseragent] = useState({blurCont: '', asideCont: '', italic: '', outter: ''})
  

  let [not, isnot] = useState('')

useEffect(()=>{
  const ua = navigator.userAgent;
         const isIphone = /iPhone/.test(ua);
         const safari  = /^((?!chrome|android).)*safari/i.test(ua)
         const isEdge = /Edg/.test(ua);
          isIphone || safari || isEdge ?()=> isnot(true):null
        // console.log(isIphone.current || safari.current)
        if (isIphone ){
            setuseragent(prev=>({blurCont: 'blurContIphone', asideCont: 'asideIphone', italic: 'italicIphone', outter: 'outterAlt'}))
        } else if (isEdge) {
            setuseragent(prev=>({blurCont: 'blurContEdje', asideCont: 'asideEdje', italic: 'italicEdje',  outter: 'outterAlt'}))
        }},[])

  return (
  
    <div className="App">
{not ? 
     <Routes 
     location={location} //для переходов
      >
          <Route path="/" element={<Home blurState={blurState} setBlur={setBlur} blurFlag={blurFlag} userAgent={userAgent}></Home>}></Route>
          <Route path="/more" element={<More rate={rate} setRate={setRate} firstTransition={firstTransition} settrans={settrans}></More>}></Route>
      </Routes>

: 
        <SwitchTransition mode="out-in">    
            <CSSTransition 
           classNames='transition'
           key={location.key}
           // выше для переходов 
           timeout={500}>
             
              <Routes 
             location={location} //для переходов
              >
                  <Route path="/" element={<Home blurState={blurState} setBlur={setBlur} blurFlag={blurFlag} userAgent={userAgent}></Home>}></Route>
                  <Route path="/more" element={<More rate={rate} setRate={setRate} firstTransition={firstTransition} settrans={settrans}></More>}></Route>
              </Routes>

            </CSSTransition>
        </SwitchTransition>
}
    {/* end of app */}
    </div>
  )
}

export default App;
