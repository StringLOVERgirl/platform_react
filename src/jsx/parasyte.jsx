 import parasyte from '/Ocin-Parasite480.mp4'
 import { useState, useRef } from 'react'
 import { posters } from './posters'

 export function Parasyte(){

    const parasyteref = useRef('')
    const parasyteVideo = useRef('') 

    let [maxCont, setMaxCont] = useState('')
    let [isParasyte, setParasyte] = useState('')
    let [maxStatus, setStatus] = useState('')


    function dbl(){
        if (maxCont == 'maxContScale'){
            parasyteVideo.current.pause()
            setMaxCont('')
            setParasyte('')
            setStatus('')
        }
        else {
            setMaxCont('maxContScale')
            setParasyte('parasyteOn')
        }
    }

    function parasytePlayer(){
        if (maxCont != 'maxContScale') return
        if(parasyteVideo.current.paused){
            setStatus('play')
            parasyteVideo.current.play()
        } else {
            parasyteVideo.current.pause()
            setStatus('')
        }
    }


    return(
        <>
        <img 
              className={`poster`} 
              ref={parasyteref} 
              src={`${posters[4]}`}></img>

        <div className={`parasyteCont ${maxCont}`} 
        // onDoubleClick={dbl}
        >
                
              <video className={`parasiteVideo ${isParasyte}`} 
                //  onClick={parasytePlayer} 
                onEnded={()=>setStatus('')}
                 src={parasyte} 
                 ref={parasyteVideo}></video>


              <div className="maxPlayerCont">

                <div className="maxButtonCont maxPlayCont">
                    <button className={`maxButton maxPlay ${maxStatus} ${isParasyte}`} onClick={parasytePlayer}>
                    </button>
                </div>

                <div className="maxButtonCont maxScreenCont">
                    <button className='maxButton maxScreen' onClick={dbl} ></button>
                </div>

              </div>

        </div>
        </>
    )
}