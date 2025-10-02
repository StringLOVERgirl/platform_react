import { Link } from "react-router-dom"
import { Header } from "./header"
import { useState, useRef, useEffect} from "react"
import { Recommend } from "./recomend"
import { MorePreloader } from "./morePreloader"
import { translation } from "./translate"
import { Text } from "./text"


export function More ({rate, setRate, firstTransition, settrans}) {

    let [lang, setLang] = useState({
        quite: {
            first:translation.firstEng,
            second:translation.secondEng
        },
        desc:translation.eng
    })


    let [platform, setPlatform] = useState({platform: '', button:  ''})

    function platformButton() {
        console.log(platform)
        if (!platform.platform) {
            setPlatform(prev => ({platform:'hidePlatform', button: 'hideButton'}))
        } else {
            setPlatform(prev => ({platform:'', button: ''}))
        }
    }


    const observer = useRef(null)
    const toObserve = useRef([])
    
    useEffect(() => {

        observer.current = new IntersectionObserver(entry => {

            entry.forEach(e => {
   
                if (e.intersectionRatio > 0.5) {
                    console.log('fgghdh')
                    if (e.target.dataset.labe != 'ofset') {
                        console.log(entry[e])
                        setRate('showRate')
                    } else {
                        console.log('back')
                        e.target.style.setProperty('--ofsetInner',0)
                    }
                } else {
                    if (e.intersectionRatio < 0.5) {
                        e.target.style.setProperty('--ofsetInner','100%')
                    }
                }
                // end of for
            })
            // enf of observer func
        }, {
              root: null,
              threshold: [0,0.5]
              // end of observer
        })

        toObserve.current.forEach(e => observer.current.observe(e))
        
        return(() => {
          observer.current.disconnect()
        })

    },[])

    console.log(firstTransition)


    return (

        <section>
            <div className="more">

                {!firstTransition ? <MorePreloader settrans={settrans} setRate={setRate}></MorePreloader> : null}
                <div className="morTopBg"></div>
                <div className="blurLayer blur-overlay3"></div>
            
                {/* header */}
                <Header zindex={1} setLang={setLang} translation={translation} active='true'></Header>
                     {/* <Link to="/" state='read'>read</Link>
                     работает
                      */}
                <div className="homeLinkCont">
                   <Link to="/"  state='more' className="homeLink" data-labe='home'>home</Link>
                </div>                     
                <div className="plBtnCont" onClick={platformButton}>
                     <button className={`platformButton ${platform.button}`}
                    data-labe='active platform'>stop platform</button>
                </div>


                <Text rate={rate} platform={platform} lang={lang}></Text>

                <Recommend toObserve={toObserve}></Recommend>
            {/* end of more */}
            </div>
        </section>)
}