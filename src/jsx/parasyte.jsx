 import parasyte from '/Ocin-Parasite480.mp4'
 import { useState, useRef } from 'react'
 import { posters } from './posters'

 export function Parasyte() {

    const parasyteref = useRef('')
    const parasyteVideo = useRef('') 

    let [maxCont, setMaxCont] = useState('')
    let [isParasyte, setParasyte] = useState('')
    let [maxStatus, setStatus] = useState('')
    let [isScreenBg, setScreenBg] = useState('screebBg')


    function fullscreen(){
        if (maxCont == 'maxContScale') {
            parasyteVideo.current.pause()
            setMaxCont('')
            setParasyte('')
            setStatus('')
            setScreenBg('screebBg')
        }
        else {
            setMaxCont('maxContScale')
            setParasyte('parasyteOn')
            setScreenBg('')
        }
    }

    function parasytePlayer(){

        if (maxCont != 'maxContScale') return

        if (parasyteVideo.current.paused) {
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
       src={`${posters[4]}`}>
        </img>

        <div className={`parasyteCont ${maxCont}`}>
                
            <video className={`parasiteVideo ${isParasyte}`} 
           onEnded={() => setStatus('')}
           src={parasyte} 
           onClick={parasytePlayer}
           ref={parasyteVideo}> 
            </video>


            <div className="maxPlayerCont">
    
                <div className="maxButtonCont maxPlayCont">
                    <button className={`maxButton maxPlay ${maxStatus} ${isParasyte}`} onClick={parasytePlayer}>
                    </button>
                </div>
    
                <div className={`maxButtonCont maxScreenCont ${isScreenBg}`}>
                    <button className='maxButton maxScreen' onClick={fullscreen}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M25.7607422,3.8359375C14.0908203,3.8359375,4.5966797,13.3300781,4.5966797,25s9.4941406,21.1640625,21.1640625,21.1640625  S46.9248047,36.6699219,46.9248047,25S37.4306641,3.8359375,25.7607422,3.8359375z M23.6982422,34.4477539h-1V27.90625H16.46875v-1  h7.2294922V34.4477539z M35.0527344,23.25h-7.2294922v-7.5415039h1V22.25h6.2294922V23.25z"/>
                        </svg>
                    </button>
                </div>
                {/* enf of max player cont */}
             </div>

             {/* end of parasyte cont */}
        </div>
        </>
    )
}