import { useEffect, useRef, useState } from "react"
import { LineOutter } from "./line"
import { posters } from "./posters"
import { RecScroll } from "./recScroll"

export function Recommend({toObserve}) {

    const line = useRef(null)

    let [linemetrics, setmetrics] = useState({
        stepWidth: null,
        steps: posters.length,
        maxSteps: null,
        offset: 0
    })

    useEffect(() => {
        setmetrics(prev => ({...prev, stepWidth: 100 / prev.steps}))
    },[])

    // useEffect(()=>{
    //  console.log(linemetrics)
    // },[linemetrics])


    return(
        <section className="recommendSec">

            { window.innerWidth > 600 ?
            <h2 className="toWatch">Something<br></br>to watch</h2> 
            : <h2 className="toWatch">Something to watch</h2> }

            <div className="recommendOutter">
                <div className="recRight">
                    <div className="recBg"></div>
                    <LineOutter line={line} toObserve={toObserve}></LineOutter>
                    <RecScroll linemetrics={linemetrics} setmetrics={setmetrics} line={line}></RecScroll>               
                {/* enf of rec right */}
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