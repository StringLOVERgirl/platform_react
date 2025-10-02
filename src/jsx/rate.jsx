import { useRef, useState } from 'react'
import video from '../assets/trailer.mp4'


function Aside() {

    return(
        <div className="asideMore">
            
            <div className="ganreCont">
            {['horror', 'thriller', 'sci-fi'].map(e => 
                <span className="ganre" key={'span'+e}>{e}&nbsp;</span>)}
            </div>

            <div className="rateCont">

                <svg style={{background: 'unset'}} width="1.5em" height="1.5em"
               viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <polygon
                   points="100,30 115,75 160,75 125,105 140,150 100,125 60,150 75,105 40,75 85,75"
                   fill="#a4ffcab5"
                   stroke="var(--textColor)"
                   strokeWidth="3"/>
                </svg>
                <span className="rate">IMDb 7.0/10</span>
                {/* end of rate cont */}
            </div>

        </div>
    )
}


export function Rate({rate}) {

    const trailer = useRef(null)
    let [first, setFirst] = useState('on')
    let [changePlayer, setPlayer] = useState('changePlayer')


    function player(){
        if (!trailer.current.paused){
            trailer.current.pause()
            setPlayer('changePlayer')
        } else {
            trailer.current.play()
            setPlayer('')
        }
    }

    
    return(

    <div className="moreTitleCont">

        <div className={`titleText ${rate}`}>

            <h1 className="moreH1">Platform</h1>
            <Aside></Aside>

        </div>


        <div className="videoCont">
   
            <video src={video} className="trailer" ref={trailer}></video>
   
            <div className={`playerCont ${first}`} onClick={() => {if (first == 'on') {setFirst('')}}}>
                <div className="playCont" onClick={player}>
                    <button className={`playerButton playButton ${changePlayer}`}></button>
                </div>
            </div>
           {/* end of video cont */}
        </div>
    {/* end of more title cont */}
    </div>)
}