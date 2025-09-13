import { useEffect, useRef, useState , useLayoutEffect} from "react";
import React from "react";

export function Preloader(){


    let [isPreload, setPreload] = useState('')

    const preloaderCont = useRef(null)
    const preload = useRef(null)

    const textDelay = 'We learned how to respect the Law on Level 24'.split(' ')
    const delayRef = useRef({delays: [0], acc: 0})
    function setDelay(){
    
    textDelay.forEach(e=> {
    let d =  e.length < 5 ? 0.3 : 0.6
      delayRef.current.delays.push(d+delayRef.current.acc)
     delayRef.current.acc += d
    }
      )
    }
    
    setDelay()
    
    function hideQuite(){
      setPreload('hidePreloader')
      console.log(12)
    }

    return (
 <div className={`preloaderOutter ${isPreload}`} ref={preload}>
        <div className={`preloaderCont`} ref={preloaderCont}>
        {textDelay.map((e,i)=>{
   return <React.Fragment key={'preloader element'+i}>
 <span className="preloader" 
 onAnimationEnd={e==24?hideQuite:null}
 style={{'--delay':delayRef.current.delays[i]+'s',
 '--dur':e.length < 5 ? 0.25+'s' : 0.5+'s',
'--trigger':e==24?delayRef.current.acc:''}}
 data-labe={e}>{e}</span>
 <span >{"'\u00A0'"}</span>
 </React.Fragment> 
}
)}
        </div>
      </div>
    )
}