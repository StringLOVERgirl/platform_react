import { useRef, useState } from "react"
import movie2019 from "../assets/the_platform2.webp"
import movie2024 from "../assets/pl.webp"

export function AsideHome({inner, asideImgCont}) {

    const year = useRef()

    let [flags, setFlags] = useState({flagBg: true, flagMinBg:true})

    let [bg, setBg] = useState(null)

    function changeBg (){

        let value = flags.flagBg ? 1 : 0
        let valueMin = flags.flagMinBg ? 0.8 : 0

        setFlags(prev=> ({flagBg: !prev.flagBg ,flagMinBg: !prev.flagMinBg}))
        console.log(flags)
        setBg(prev=> prev =='changeBg' ? '' : 'changeBg')

        inner.current.style.setProperty('--opacityBg', value)
        asideImgCont.current.style.setProperty('--opacityMinBg', valueMin)
   }

    return(
        <aside className="asideImgCont" ref={asideImgCont} onClick={changeBg}>

        <div className="yearCont">
            <div className={`year ${bg}`} ref={year} data-labe="2024">
              2019
            </div>
        </div>

        <img
       className="asideImg"
       id="first"
       src={movie2019}
       alt="characters goreng and trimagisy"> 
        </img>

        <img
       className="asideImg"
       id="second"
       src={movie2024}
       alt="main character form second movie">
        </img>
     </aside>
    )
}