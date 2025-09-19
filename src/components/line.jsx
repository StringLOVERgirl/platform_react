import { posters, titles, types } from './posters'
import { useEffect, useRef, useState } from 'react'
// import parasyte from '/parasyte480.mp4'

function LineInner({toObserve}){

    const posterElements = useRef([])

    const parasyteref = useRef('')
    const parasytevideo = useRef('') 

    let [parasytestate, setparasyte] = useState('')

    function dbl(){
        if (parasytestate == 'maxim'){
            parasytevideo.current.pause()
            setparasyte('')
        }
        else {
            setparasyte('maxim')
        }
    }

    function parasyteplayer(){
        if(parasytevideo.current.paused){
            parasytevideo.current.play()
        } else {parasytevideo.current.pause()}
    }

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
              <img 
            //   onDoubleClick={posters[i].includes('para')?dbl:null}
              className={`poster ${posters[i].includes('para')?'parasiteTrigger':''}`} 
              ref={posters[i].includes('para')?parasyteref:null} 
              src={`${posters[i]}`}></img>
              {posters[i].includes('para')?<video onClick={parasyteplayer} onDoubleClick={dbl} src={parasyte} className={`parasyte ${parasytestate}`} ref={parasytevideo}></video>:null}
              <div className="titleRightCont"
                            onClick={posters[i].includes('para')?dbl:null}
                            >
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