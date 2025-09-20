import { posters, titles, types } from './posters'
import { useEffect, useRef, useState } from 'react'
import parasyte from '/Ocin-Parasite480.mp4'

function Parasyte(){


    const parasyteref = useRef('')
    const parasytevideo = useRef('') 

    let [maxCont, setMaxCont] = useState('')
    let [isParasyte, setParasyte] = useState('')


    function dbl(){
        if (maxCont == 'maxContScale'){
            parasytevideo.current.pause()
            setMaxCont('')
            setParasyte('')
        }
        else {
            setMaxCont('maxContScale')
            setParasyte('parasyteOn')
        }
    }

    function parasyteplayer(){
        if(parasytevideo.current.paused){
            parasytevideo.current.play()
        } else {parasytevideo.current.pause()}
    }


    return(
        <>
        <img 
              className={`poster`} 
              ref={parasyteref} 
              src={`${posters[4]}`}></img>
              <div className={`parasyteCont ${maxCont}`}
                            onDoubleClick={dbl}

              >
              <video className={`parasiteVideo ${isParasyte}`} onClick={parasyteplayer} onDoubleClick={dbl} src={parasyte} ref={parasytevideo}></video>
              <div className="bgvideo"></div>
              </div>
        </>
    )
}

function LineInner({toObserve}){

    const posterElements = useRef([])

    function addPoster(el){
        if (!posterElements.current.includes(el)){
            posterElements.current.push(el)
        }
    }

    useEffect(()=>{
    posterElements.current.forEach(e=>
    toObserve.current.push(e)
)
console.log(toObserve.current)
},[])

    return(
        <>
        {posters.map((e,i)=>
        <div className={`posterCont posterCont${i}`} 
        key={'postercony'+i}
        >
            <div className="posterImgCont" ref={addPoster} data-labe='ofset'>
            {posters[i].includes('para')?<Parasyte/>:
            <img className={`poster`} src={`${posters[i]}`}></img>}
              
              <div className="titleRightCont">
                <span>{titles[i]}</span>
                <span className='type'>{types[i]}</span>
              </div>
            </div>
        </div>
        )}
        </>
    )
}

export function LineOutter({line, toObserve}){

    return(
        <div className='posterline' ref={line}>
            <LineInner toObserve={toObserve}></LineInner>
        </div>

    )
}