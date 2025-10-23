import { useEffect, useRef , useLayoutEffect, useState} from "react";
import React from "react";
import { Header } from "./header";
import { Preloader } from "./preloader";
import { Homecopy } from "./homecopy";
import { useLocation } from "react-router-dom";
import { AsideHome } from "./asideHome";
import { FooterHome } from "./footerHome";
import { BlurHome } from "./blurButton";
import { addBlurLisrs, removeBlurLisrs } from "./blurLisrs";


export function Home({blurState, setBlur, blurFlag}) {

   const location = useLocation();
  
      // window.history.replaceState({}, '')
   const psedoWindow = useRef()

   const inner = useRef()
  
   const titleCont = useRef()
  
   const blur = useRef()
  
   const asideImgCont = useRef()
      
   const isMobile = useRef(false) 

  
   function unBlur(ev){
  
      if (blurFlag.current) {
         blur.current.style.maskImage = `unset`;
         blur.current.style.webkitMaskImage = `unset`;
         return
      }
    
      if (isMobile.current) {
         // отключаем прокрутку при свайпе
         console.log('precent none')    
         ev.preventDefault();
      }
  
      const evenet = isMobile.current ? ev.touches[0] : ev
  
      const x = evenet.clientX;
      const y = evenet.clientY;
      const radius = 100; // можно менять радиус круга здесь
  
      // на сам эл или родитель ближайшмй
      blur.current.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
      blur.current.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
   }


   function changeMobileState() {
      isMobile.current =  window.innerWidth < 600 ? true : false
   }

   let [userAgent, setuseragent] = useState({blurCont: '', asideCont: '', italic: ''})
  
   useEffect(() => {
  
     // window.addEventListener('resize', () => {     
     //   removeBlurLisrs()
     //   changeMobileState()
     //   addBlurLisrs()
     // })



        const ua = navigator.userAgent;
        const isIphone = /iPhone/.test(ua);
        const safari = /^((?!chrome|android).)*safari/i.test(ua)
        const isEdge = /Edg/.test(ua);
        console.log(isIphone || safari)
        if (isIphone ){
            setuseragent(prev=>({blurCont: 'blurContIphone', asideCont: 'asideIphone', italic: 'italicIphone'}))
        } else if (isEdge) {
            setuseragent(prev=>({blurCont: 'blurContEdje', asideCont: 'asideEdje'}))
        }
 
  
     changeMobileState()
     addBlurLisrs(isMobile, unBlur)    

     return(() => removeBlurLisrs(isMobile, unBlur))
  
   },[])
  
  
   function asideParallax() {
      let speed = isMobile.current ? 7 : 5
      let value = psedoWindow.current.scrollTop / speed
      asideImgCont.current.style.setProperty('--parallaxImg', -value + 'px')
   }

   const raf = useRef(null)

   function parallaxSpacing() {
      let value = psedoWindow.current.scrollTop * 0.2
      titleCont.current.style.setProperty('--ls', value + 'px')
      raf.current = requestAnimationFrame(parallaxSpacing)
   }

   useLayoutEffect(() => {
      // нужен он если добавляю обработчики на элемент и очищаю их то в обычном 
      // юс эффект ссылки на элемнты на моменты выполнения очистки будут ноль 
  
      // паралакс картинки
      console.log(psedoWindow.current)
      psedoWindow.current.addEventListener('scroll', asideParallax)
     
      parallaxSpacing()
    
      return () => {
          psedoWindow.current.removeEventListener('scroll', asideParallax)
          console.log('aside parallax has been removed')
          cancelAnimationFrame(raf.current)
      }
   },[])
    
   console.log('montirovanie home')


   return(

      <div>

         {location.state === 'more' ? '' : <Preloader></Preloader>}

          <div className="outter" ref={psedoWindow}>

             <div className="inner" ref={inner}>               
                 <Header></Header>
              
                 <div className="titleCont" ref={titleCont}>{
                    'Platform'.split('').map((e,i) => 
                       <h2 className="title" key={'titleLetter' + i}>{e}</h2>)}
                 </div>

                 <BlurHome blurFlag={blurFlag} setBlur={setBlur} userAgent={userAgent}></BlurHome>

                 <AsideHome inner={inner} asideImgCont={asideImgCont} userAgent={userAgent}></AsideHome>
                 <Homecopy></Homecopy>
              {/* <!-- end of inner --> */}
             </div>

             <div className={`blurLayer blur-overlay ${blurState}`} ref={blur}></div>
             <FooterHome userAgent={userAgent}></FooterHome>

          {/* end of outter */}
          </div>
          {/* end of component */}
        </div>
   )
}