import { useEffect, useState } from "react"

export function MorePreloader({settrans, setRate}) {

   let [isPreloader, setPreloader] = useState('')

    useEffect(()=>{

        setTimeout(() => {
            setPreloader('hideMorePr')
            setRate('showRate')
        }, 3000)

        setTimeout(() => {
            settrans(true)
        }, 3700)
        
},[])

return(
    <div>
        <div className={`morePrCont ${isPreloader}`}>
            <div className="morePrInner">
                {Array.from({length:4}).map((_,i) => <div className="morePrElement" style={{'--delay':(i+1)*0.3+'s'}}></div>)}
            </div>
        </div>
    </div>
)
}