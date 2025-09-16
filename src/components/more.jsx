import {Link } from "react-router-dom"
import { Header } from "./header"
import { useState, useRef } from "react"
import video from '../assets/trailer.mp4'
export function More (){


    return (
        <>
        <section>
        <div className="more">
                <div className="animateBg"></div>
                
<div className="veticalOutter">

<div className='verticalInner'>
   <div className="platform platformTop"></div> 
   <span className="verticalSpan">platform</span> 
   <div className="platform platformBottom"></div> 
    
</div>

</div>  


            <div className="blurLayer blur-overlay3"></div>
                    <Header zindex={1}></Header>
                    {/* <Link to="/" state='read'>read</Link>
                    работает
                     */}
                    <Link to="/"  state='more' className="homeLink"
            style={{position:'absolute',color: '#c5c5b8',fontFamily:'oswald',
             fontSize: '1.4em',
        top:0, left: '3em', left: '8em', paddingTop: '0.5em',
textDecoration: "none", textAlign: "center", zIndex:1}}
            >home</Link >
            {/* <h1 className="h1More">more</h1> */}

<div className="text">

<div className="moreTitleCont">
        <div className="titleText">
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
        <video src={video} className="trailer" autoPlay muted={true} ></video>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/RlfooqeZcdY?si=2LDHxSSrbL9u1tGM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
</div>
{/* 
<div className="desch2Cont">
   <h2 className="desch2">
     {/*  Сюжет */}
     {/* description */}
   {/* </h2> */}
{/* </div> */} 
<div className="innerText">
        <div className="quiteCont">
                <div className="quiteBg"></div>
                <span className="quoite qu">it's better to eat</span>
                <span className="quoite qu2">than be aaten</span>
        </div>
<div className="titleMoreBg"></div>
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
  {/* Научно-фантастический фильм с элементами ужасов и триллера
режиссёра Гальдера Гастелу-Уррутии. Действие фильма происходит 
в многоэтажной башне с ярусами. На каждом «этаже» находятся по
двое «заключённых». Через центр башни проходит прямоугольная шахта,
по которой раз в день спускается платформа с едой. Еды, которая 
изначально поступает на верхний уровень, могло бы хватить на
всех заключённых, однако обитатели нижних этажей умирают от 
голода, совершают самоубийства или становятся каннибалами, в 
то время как те, кто оказался наверху, пируют, поглощая 
гораздо больше еды, чем им требуется для выживания  */}
</p>
</div>
{/* end of text */}
</div>


        </div>
        </section>
        <div className="similar"></div>
        </>
    )
}