import { useState, useRef } from "react"


export function RecScroll({linemetrics, setmetrics, line}) {

    let [arrow, setarrow] = useState({left: 'unset', right: 'unset'})

    const flags = useRef({left: false, right: false})

    function toLeft() {
        if (flags.current.left) return

        flags.current.left = true
        setTimeout(() => flags.current.left = false, 400)

        console.log('to left')
        setarrow(prev => ({...prev, right: 'arrowHover'}))
        setTimeout(() => 
            setarrow(prev => ({...prev, right: 'unset'}))
            ,200)
        
        if (linemetrics.offset < 100 - linemetrics.stepWidth){
            console.log('left')
            let value = linemetrics.offset + linemetrics.stepWidth
            line.current.style.setProperty('--ofset', -value + '%')
            setmetrics(prev => ({...prev, offset: prev.offset + prev.stepWidth}))
        }
    }

    function toRight() {
        if (flags.current.right) return

        flags.current.right = true
        setTimeout(() => flags.current.right = false, 400)

        console.log('to right')
        setarrow(prev => ({...prev, left: 'arrowHover'}))
        setTimeout(() =>
            setarrow(prev => ({...prev, left: 'unset'}))
            , 200)

        if (linemetrics.offset > 0) {
            console.log('left')
            let value = linemetrics.offset - linemetrics.stepWidth
            line.current.style.setProperty('--ofset', -value + '%')
            setmetrics(prev => ({...prev, offset: prev.offset - prev.stepWidth}))
        }
    }

    function toTop() {
        window.scrollTo(0,0)
    }

    
    return(
        <div className="arrowsCont">

            <svg onClick={toRight} className={`leftArrow ${arrow.left}`}  xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                <path d="M50,8A42,42,0,1,0,92,50,42.08,42.08,0,0,0,50,8ZM64.16,52.6,47.36,67.68a3.5,3.5,0,1,1-4.67-5.21L56.58,50,42.69,37.6a3.5,3.5,0,0,1,4.67-5.22l16.8,15A3.54,3.54,0,0,1,65.33,50,3.5,3.5,0,0,1,64.16,52.6Z"/>
            </svg>

            <svg onClick={toLeft} className={`rightArrow  ${arrow.right}`}  xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                <path transform="rotate(180 50 50)" d="M50,8A42,42,0,1,0,92,50,42.08,42.08,0,0,0,50,8ZM64.16,52.6,47.36,67.68a3.5,3.5,0,1,1-4.67-5.21L56.58,50,42.69,37.6a3.5,3.5,0,0,1,4.67-5.22l16.8,15A3.54,3.54,0,0,1,65.33,50,3.5,3.5,0,0,1,64.16,52.6Z"/>
            </svg>

            <nav className="ancorCont">
                <a className="toTopMore" onClick={toTop}>to top</a>
            </nav>
        {/* end of arrows cont */}
        </div>
    )
}