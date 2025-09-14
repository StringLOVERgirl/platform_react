import {Link } from "react-router-dom"
import { Header } from "./header"
import { useState, useRef } from "react"
export function More (){


    return (
        <div className="more">

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
                    <Link to="/"  state='more' 
            style={{position:'absolute',color: 'var(--moreColor)',fontFamily:'oswald',
             fontSize: '1.4em',
        top:0, left: '3em', left: '8em', paddingTop: '0.5em',
textDecoration: "none", textAlign: "center", zIndex:1}}
            >home</Link >
            {/* <h1 className="h1More">more</h1> */}

<div className="text">

{/* 
<div className="desch2Cont">
   <h2 className="desch2">
     {/*  Сюжет */}
     {/* description */}
   {/* </h2> */}
{/* </div> */} 

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
{/* end of text */}
</div>
        </div>
    )
}