import {Link } from "react-router-dom"
import { Header } from "./header"
import { useState, useRef , useEffect} from "react"
import { Rate } from "./rate"
import { Homecopy } from "./homecopy"
import { Recommend } from "./recomend"


export function More ({rate, setRate}){
        // window.scrollTo(0,0)

        const h1Trigger = useRef(null)
        const observer = useRef(null)

        const toObserve = useRef([])

        let [platform, setPlatform] = useState({platform: '', button:  ''})

        function platformButton(){
                console.log(platform)
          if(!platform.platform){
                setPlatform(prev => ({platform:'hidePlatfrom', button: 'hideButton'}))
          } else {
                setPlatform(prev => ({platform:'', button: ''}))
          }
        }
        
        useEffect(()=>{

                toObserve.current.push(h1Trigger.current)

                observer.current = new IntersectionObserver(entry => {
                        entry.forEach(e=>{
                                if(e.isIntersecting){ if (e.target.dataset.labe != 'ofset'){
                                        console.log(entry[e])
                                        setRate('showRate')
                                        }}
                          if (e.intersectionRatio > 0.5){
                                console.log('fgghdh')
                                if (e.target.dataset.labe != 'ofset'){
                                  console.log(entry[e])
                                  setRate('showRate')
                                  }
        
                                  else  {
                                        console.log('back')
                                         e.target.style.setProperty('--ofsetInner',0)
                                  }
                                } else  {
                                        if(e.intersectionRatio < 0.5){
                                        e.target.style.setProperty('--ofsetInner','100%')
                                        }
                                }
                        })
                }, {
                        root: null,
                        threshold: [0,0.5]
                })

                toObserve.current.forEach(e=>observer.current.observe(e))
                

                return(() =>{
                        observer.current.disconnect()
                }
                )
        },[])

    return (
        <>
        <section>
        <div className="more">
                <div className="morTopBg"></div>

  


            <div className="blurLayer blur-overlay3"></div>
            
            <Header zindex={1}></Header>
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

<div className="text" ref={h1Trigger}>
      {/* vertical platform */} 
      <div className="veticalOutter">

<div className={`verticalInner ${platform.platform}`}>
   <div className="platform platformTop"></div> 
   <span className="verticalSpan">el hoyo</span> 
   <div className="platform platformBottom"></div> 
    
</div>

</div>
<Rate rate={rate}></Rate>

<div className="innerText">
        
        <div className="quiteCont">
                <div className="quiteBg"></div>
                <span className="quoite qu">it's better to eat</span>
                <span className="quoite qu2">than be eaten</span>
                <Homecopy></Homecopy>
        </div>
        <div className="quiteDeepBg"></div>


<div className="titleMoreMini"></div>

<p id="movieDescription">

  The film is set in a large, industrial tower named the "Vertical
  Self-Management Center." Residents of the tower are imprisoned in
  the center as punishment for committing crimes. Every month,
  prisoners switch between the tower's many floors and are fed by a
  vertically moving platform with food on it. The platform is
  initially filled with lots of food, and gradually descends through
  the tower's levels, stopping for a fixed amount of time on each
  floor. Since the residents of each floor tend to eat as much food
  as they can, those on the lower floors are unable to eat as much
  food as those at the top, leading to conflict.
</p>
{/* end of inner text */}
</div>
{/* end of text */}
</div>
<Recommend toObserve={toObserve}></Recommend>
{/* end of more */}
        </div>
        {/* <div className="similar"></div> */}

        </section>
        </>
    )
}