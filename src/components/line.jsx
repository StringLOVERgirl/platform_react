import { posters, titles, types } from './posters'
import { useEffect, useRef } from 'react'

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
              <img className='poster' src={posters[i]}></img>
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