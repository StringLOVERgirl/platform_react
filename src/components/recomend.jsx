import { useEffect, useRef, useState } from "react"
import { LineOutter } from "./line"
import { posters } from "./posters"

export function Recommend({toObserve}){

    const line = useRef(null)

    let [arrow, setarrow] = useState({left:'',right:''})

    let [linemetrics, setmetrics] = useState({
        stepWidth: null ,
        steps:  posters.length,
        maxSteps: null,
        offset: 0
    })

    useEffect(()=>{
        setmetrics(prev => ({...prev, 
            stepWidth: 100 / prev.steps,
          }))
    },[])

    useEffect(()=>{
     console.log(linemetrics)
    },[linemetrics])

    function toLeft(){
        if (linemetrics.offset < 100 - linemetrics.stepWidth){
            console.log('left')
            let value = linemetrics.offset + linemetrics.stepWidth
            line.current.style.setProperty('--ofset', -value+'%')
            setmetrics(prev=>({...prev, offset: prev.offset + prev.stepWidth}))
        }
    }

    function toRight(){
        if (linemetrics.offset > 0){
            console.log('left')
            let value = linemetrics.offset - linemetrics.stepWidth
            line.current.style.setProperty('--ofset', -value+'%')
            setmetrics(prev=>({...prev, offset: prev.offset - prev.stepWidth}))
        }
    }

    function toTop(){
        window.scrollTo(0,0)
    }

    function touchstart(e){
        if(window.innerWidth < 600)return
        if (e.currentTarget.dataset.labe == 'left'){
            toRight()
        setarrow(prev=>({...prev,left:'arrowHover'}))
       } else {
        toLeft()
        setarrow(prev=>({...prev, right:'arrowHover'}))
        }
    }

    function touchend(e){
        if(window.innerWidth < 600)return
        if (e.currentTarget.dataset.labe == 'right'){
            setarrow(prev=>({...prev,left:''}))
           } else {
            setarrow(prev=>({...prev, right:''}))
            }
    }



    return(
        <section className="recommendSec">
            {window.innerWidth > 600 ?
            <h2 className="toWatch">
                Something<br></br>to watch
            </h2> : <h2 className="toWatch">
                Something to watch*
            </h2>  }

            {/* <nav className="ancorCont">
               <a className="toTopMore" onClick={toTop}>to top</a>
            </nav> */}

            <div className="recommendOutter">

                {/* <div className="recLeft">
                    <div className="recBgCont"></div>
                </div> */}

                <div className="recRight">
                    <div className="recBg"></div>
                    <LineOutter line={line} toObserve={toObserve}></LineOutter>

                    <div className="arrowsCont">
                        <svg onClick={toRight} className={arrow.left}  onTouchStart={touchstart} data-labe='right' xmlns="http://www.w3.org/2000/svg" fill="rgba(110,110,110,0.359)" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                        <path d="M50,8A42,42,0,1,0,92,50,42.08,42.08,0,0,0,50,8ZM64.16,52.6,47.36,67.68a3.5,3.5,0,1,1-4.67-5.21L56.58,50,42.69,37.6a3.5,3.5,0,0,1,4.67-5.22l16.8,15A3.54,3.54,0,0,1,65.33,50,3.5,3.5,0,0,1,64.16,52.6Z"/>
                        </svg>
                        <svg onClick={toLeft} data-labe='left' onTouchEnd={touchend} className={`toLeftArrow ${arrow.right}`} fill="rgba(110,110,110,0.359)" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                        <path transform="rotate(180 50 50)" d="M50,8A42,42,0,1,0,92,50,42.08,42.08,0,0,0,50,8ZM64.16,52.6,47.36,67.68a3.5,3.5,0,1,1-4.67-5.21L56.58,50,42.69,37.6a3.5,3.5,0,0,1,4.67-5.22l16.8,15A3.54,3.54,0,0,1,65.33,50,3.5,3.5,0,0,1,64.16,52.6Z"/>
                        </svg>

                        <nav className="ancorCont">
               <a className="toTopMore" onClick={toTop}>to top</a>
            </nav>
                    </div>
                </div>
            </div>
            <footer className="moreFooter">
                    <div className="footerMoreCont">
                        <span >2025© All rights Reserved. Design of this page is intellectual property of its owner.</span>
                    </div>
                </footer>
        </section>
    )
}