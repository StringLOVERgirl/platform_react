import { useRef } from 'react'
import video from '../assets/trailer.mp4'


export function Rate({rate}){

const trailer = useRef(null)

function volume(){
//   if(trailer.current){
    console.log(1)
    if(trailer.current.muted == false){
        trailer.current.muted = true
    } else {
        trailer.current.muted = false
    // }
  }
}

function player(){
    if (!trailer.current.paused){trailer.current.pause()} 
    else {trailer.current.play()}
}

    return(

    <div className="moreTitleCont">

        <div className={`titleText ${rate}`}>
           <h1 className="moreH1">Platform</h1>
           <aside className="asideMore">
                <div className="ganreCont">
                {['horror', 'thriller', 'sci-fi'].map(e=> <span className="ganre" key={'span'+e}>{e}&nbsp;</span>) }</div>
                
                <div className="rateCont">

                    <svg style={{ background: 'unset' }} width="1.5em" height="1.5em"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg">
                        <polygon
                          points="100,30 115,75 160,75 125,105 140,150 100,125 60,150 75,105 40,75 85,75"
                          fill="#a4ffcab5"
                          stroke="var(--textColor)"
                          strokeWidth="3" />
                   </svg>
                   <span className="rate">IMDb 7.0/10</span>
                   {/* end of rate cont */}
                </div>

           </aside>
           
        </div>
        <div className="videoCont">
        <video src={video} className="trailer" 
        ref={trailer}
        autoPlay muted={true} 
        >
            
        </video>
        <div className="playerCont">
            <div className="playCont" onClick={player}>
            <button className='playerButton playButton'>play</button>
            </div>
            <div className="volumeCont" onClick={volume}>
            <button className='playerButton volumeButton'>volume</button>
            </div>
        </div>
        </div>
    </div>)
}