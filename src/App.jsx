import { useSelector, useDispatch } from "react-redux";
// import netflixLogo from "./assets/netflix.webp"
import React from "react";
import movie2019 from "./assets/the_platform2.webp"
import movie2024 from "./assets/pl.webp"
import './index.css'
import { Routes, Route, Link } from 'react-router-dom';
import { More } from "./components/more";
import { Home } from "./components/ home";
import { Header } from "./components/header";


import { useEffect, useRef, useState } from "react";

// function DecorBg({id, type}){

//   function text(arg = id){
//     return 'platform'.split('').map((e,i)=>
//     <span className={`decorLetter ${e=='p'?'strokeP':''}`} 
//       key={`${arg} - letter - ${i}`}
//     >{e}</span>)
//   }
//   return <div className={`decorTextCont ${type}`} style={{
//     '--decorStart':type=='up'?'-50%':'0',
//     '--decorEnd':type=='up'?'0%':'-50%',
//     }}>
//      {text(id)}
//      {text(id+'second')
//      }
//   </div> 
// }

function App() {

//   let [isPreload, setPreload] = useState('')

//   const preloaderCont = useRef()
//   const preload = useRef()

//   const psedoWindow = useRef()
//   const inner = useRef()

//   const titleCont = useRef()

//   const blur = useRef()

//   const asideImgCont = useRef()

//   const year = useRef()
//   const copyAccent = useRef()
  
//   const blurFlag = useRef(false)
//   const isMobile = useRef(false) 

//   let [flags, setFlags] = useState({flagBg: true, flagMinBg:true})

//   function accentOrigin(){
//     copyAccent.current.style.setProperty('--copyAccentTransformOrigin', 'right')
//   }


//     function changeBg (){
//     let value = flags.flagBg ? 1 : 0
//     let valueMin = flags.flagMinBg ? 0.8 : 0
//     setFlags(prev=> ({flagBg: !prev.flagBg ,flagMinBg: !prev.flagMinBg}))
//     console.log(flags)
//     year.current.classList.toggle('changeBg')
//     inner.current.style.setProperty('--opacityBg', value)
//     asideImgCont.current.style.setProperty('--opacityMinBg', valueMin)
//   }


//   function isBlur(){ 
//     console.log(blurFlag)
//     blurFlag.current = !blurFlag.current
//     blur.current.classList.toggle('isBlur')
// }

// function unBlur(e){

//   if (blurFlag.current) {
//     blur.current.style.maskImage = `unset`;
//     blur.current.style.webkitMaskImage = `unset`;
//     return
//   }

//   // console.log(5555) 

// if (isMobile.current) {
//    // отключаем прокрутку при свайпе
//    console.log('precent none')    
//   e.preventDefault();
// }

//   const evenet = isMobile.current ? e.touches[0] : e

//   const x = evenet.clientX;
//   const y = evenet.clientY;
//   const radius = 100; // можно менять радиус круга здесь

// // на сам эл или родитель ближайшмй
//   blur.current.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
//   blur.current.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
// };
// useEffect(()=>{

//   window.addEventListener('resize', () => {
//     isMobile.current ? window.removeEventListener('touchmove', unBlur)
//     : window.removeEventListener('mousemove', unBlur)

//   isMobile.current =  window.innerWidth < 600 ? true : false

//   isMobile.current ? window.addEventListener('touchmove', unBlur, { passive: false })
//   : window.addEventListener('mousemove', unBlur)
//   }
//   )
  

//   isMobile.current =  window.innerWidth < 600 ? true : false
  
//   isMobile.current ? window.addEventListener('touchmove', unBlur, { passive: false })
//   : window.addEventListener('mousemove', unBlur)

  

// },[])




// const textDelay = 'We learned how to respect the Law on Level 24'.split(' ')
// const delayRef = useRef({delays: [0], acc: 0})
// function setDelay(){

// textDelay.forEach(e=> {
// let d =  e.length < 5 ? 0.3 : 0.6
//   delayRef.current.delays.push(d+delayRef.current.acc)
//  delayRef.current.acc += d
// }
//   )
// }

// setDelay()

// function hideQuite(){
//   setPreload('hidePreloader')
//   console.log(12)
// }

//   useEffect(()=>{
  
//   // паралакс картинки
//   psedoWindow.current.addEventListener('scroll', () => {
//     let value = psedoWindow.current.scrollTop / 5
//     // замедлить но бильном
//     asideImgCont.current.style.transform = `translateY(${-value}px)`
//   })
  
//   function parallaxSpacing(){
//       let value = psedoWindow.current.scrollTop * 0.2
//       titleCont.current.style.setProperty('--ls',value+'px')
//       requestAnimationFrame(parallaxSpacing)
//   }
//   parallaxSpacing()


//   },[])
//   console.log('montirovanie')
  return (
  
    <div className="App">
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
          <Route path="/more" element={<More></More>}></Route>
          
          
       </Routes>




      
            {/* enf of app */}
    </div>
  );
}

export default App;
