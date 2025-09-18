import { posters, titles, types } from './posters'

function LineInner(){

    return(
        <>
        {posters.map((e,i)=>
        <div className={`posterCont posterCont${i}`} 
        key={'postercony'+i}>
            <div className="posterImgCont">
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

export function LineOutter({line}){

    return(
        <div className='posterline' ref={line}>
            <LineInner></LineInner>
        </div>

    )
}