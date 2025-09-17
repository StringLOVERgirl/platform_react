import { Link } from "react-router-dom";
import { useEffect, useRef, useState , useLayoutEffect} from "react";
import movie2019 from "../assets/the_platform2.webp"
import movie2024 from "../assets/pl.webp"
import React from "react";
import { DecorBg } from "./decorbg";
import { Header } from "./header";
import { Preloader } from "./preloader";
import { Homecopy } from "./homecopy";
import { useLocation } from "react-router-dom";

export function Home({blurState, setBlur, blurFlag}){

    const location = useLocation();
  
      // window.history.replaceState({}, '')

  
    const psedoWindow = useRef()
    const inner = useRef()
  
    const titleCont = useRef()
  
    const blur = useRef()
  
    const asideImgCont = useRef()
  
    const year = useRef()
    
    const isMobile = useRef(false) 

    let [bg, setBg] = useState(null)
  
    let [flags, setFlags] = useState({flagBg: true, flagMinBg:true})
  
    
      function changeBg (){

         let value = flags.flagBg ? 1 : 0
         let valueMin = flags.flagMinBg ? 0.8 : 0

         setFlags(prev=> ({flagBg: !prev.flagBg ,flagMinBg: !prev.flagMinBg}))
         console.log(flags)
         setBg(prev=> prev =='changeBg' ? '' : 'changeBg')

         inner.current.style.setProperty('--opacityBg', value)
         asideImgCont.current.style.setProperty('--opacityMinBg', valueMin)
    }
  
  
    function isBlur(){ 

      console.log(blurFlag)
      blurFlag.current = !blurFlag.current
      setBlur(prev=> prev =='isBlur' ? '' : 'isBlur')
  }
  
  function unBlur(e){
  
    if (blurFlag.current) {
      blur.current.style.maskImage = `unset`;
      blur.current.style.webkitMaskImage = `unset`;
      return
    }
    
  if (isMobile.current) {
     // отключаем прокрутку при свайпе
     console.log('precent none')    
    e.preventDefault();
  }
  
    const evenet = isMobile.current ? e.touches[0] : e
  
    const x = evenet.clientX;
    const y = evenet.clientY;
    const radius = 100; // можно менять радиус круга здесь
  
  // на сам эл или родитель ближайшмй
    blur.current.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
    blur.current.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
  };




  function changeMobileState(){
    isMobile.current =  window.innerWidth < 600 ? true : false
  }

  function removeBlurLisrs(){
      if (isMobile.current){
        window.removeEventListener('touchmove', unBlur)
        console.log('touche has been removed')
      } else {
        window.removeEventListener('mousemove', unBlur)
        console.log('mousemove has been removed')
      }
  }

  function addBlurLisrs(){
    if (isMobile.current){
      window.addEventListener('touchmove', unBlur, {passive: false})
      console.log('touche has been added')
    } else {
      window.addEventListener('mousemove', unBlur)
      console.log('mousemove has been added')
    }
}

  
  useEffect(()=>{
  
    // window.addEventListener('resize', () => {     
    //   removeBlurLisrs()
    //   changeMobileState()
    //   addBlurLisrs()
    // })
    
  
    changeMobileState()
    
    addBlurLisrs()    

    return(removeBlurLisrs)
  
  },[])
  
  

  function asideParallax(){
      let speed = isMobile.current ? 7 : 5
      let value = psedoWindow.current.scrollTop / speed
      asideImgCont.current.style.setProperty('--parallaxImg', -value+'px')
  }

  const raf = useRef(null)

  function parallaxSpacing(){
    let value = psedoWindow.current.scrollTop * 0.2
    titleCont.current.style.setProperty('--ls',value+'px')
    raf.current = requestAnimationFrame(parallaxSpacing)
}

useLayoutEffect(()=>{
    // нужен он если добавляю обработчики на элемент и очищаю их то в обычном 
    // юс эффект ссылки на элемнты на моменты выполнения очистки будут ноль 


    // паралакс картинки
    console.log(psedoWindow.current)
    psedoWindow.current.addEventListener('scroll', asideParallax)
   
    parallaxSpacing()
  
    return ()=>{
        psedoWindow.current.removeEventListener('scroll', asideParallax)
        console.log('aside parallax has been removed')
        cancelAnimationFrame(raf.current)
    }
    },[])
    


    console.log('montirovanie')
  


console.log(location.state)
function tozero(){
  // window.scrollTo()
}

    return(
        <>
  {location.state === 'more' ? '' : <Preloader></Preloader>}

  <div className="outter" ref={psedoWindow}>
        
    <div className="inner" ref={inner}>
          
        <Header></Header>
         
        <div className="titleCont" ref={titleCont}>{
            'Platform'.split('').map((e,i)=><h2 className="title" key={'titleLetter '+ i}>{e}</h2>)
        }</div>

        <div className="blurButtonCont">
            <div className="blutInnerCont" onClick={isBlur}>
              <button id="blur">blur</button>
            </div>
        </div>


        <aside className="asideImgCont" ref={asideImgCont} onClick={changeBg}>

            <div className="yearCont">
                <div className={`year ${bg}`} ref={year} data-labe="2024">
                    2019
                </div>
            </div>

            <img
              className="asideImg"
              id="first"
              src={movie2019}
              alt="characters goreng and trimagisy"
            ></img>

            <img
              className="asideImg"
              id="second"
              src={movie2024}
              alt="main character form second movie"
            ></img>
        </aside>


        <Homecopy></Homecopy>

          {/* <!-- end of inner --> */}
    </div>


    <div className={`blurLayer blur-overlay ${blurState}`} ref={blur}></div>

    <footer className="textCont">
          <div className="textContOverlay"></div>

          <div className="decorOutter">
             <DecorBg keyy={0} type={'up'}/>
             <DecorBg keyy={1} type={'down'}/>
          </div>

          <div className="italicMainCont">
                <span className="italicMain">what is your favorite dish?</span>
          </div>
          
          <div className="linkMainCont">
            <Link className="linkAcont" 
            data-label='read more'
             href="" 
             to={"/more"}
             onClick={tozero}>
            {'read more'.split('').map((e,i)=>
            <span className={`linkSymbol ${ e === " "?'space':'linkLetter'}`} 
               key={'linkLetter '+i}
               style={{'--delay':(i+1)*0.1+'s'}}
               data-label={e}
               >{e}</span>
               )}
            </Link></div>
          {/* end of textcont */}
        </footer>
        {/* end of outter */}
      </div>
</>
    )
}