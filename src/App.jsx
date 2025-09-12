import { useSelector, useDispatch } from "react-redux";
import netflixLogo from "./assets/netflix.webp"
import movie2019 from "./assets/the_platform2.webp"
import movie2024 from "./assets/pl.webp"
import { useEffect, useRef, useState } from "react";

function DecorBg({id, type}){

  function text(arg = id){
    return 'platform'.split('').map((e,i)=>
    <span className={`decorLetter ${e=='p'?'strokeP':''}`} key={`${arg} - letter - ${i}`}>{e}</span>)
  }
  return <div className={`decorTextCont ${type}`} style={{
    '--decorStart':type=='up'?'-50%':'0',
    '--decorEnd':type=='up'?'0%':'-50%',
    }}>
     {text(id)}
     {text(id+'second')
     }
  </div> 
}

function App() {

  const inner = useRef()
  const psedoWindow = useRef()
  const preloaderCont = useRef()
  const preload = useRef()
  let [isPreload, setPreload] = useState('')
  const title = useRef()
  const blur = useRef()
  const blur2 = useRef()
  const textcont = useRef()
  const blurButton = useRef()
  const blurLayers = useRef()
  const asideImgCont = useRef()
  const secondBg = useRef()
  const year = useRef()
  const copyAccent = useRef()
  const titleCont = useRef()
  
  const blurFlag = useRef(false)
  // let [isMobile, setIsMobile] = useState(null) 
  const isMobile = useRef(false)
  let [isTitle, setTitle] = useState('')

  let [flags, setFlags] = useState({flagBg: true, flagMinBg:true})

  function accentOrigin(){
    copyAccent.current.style.setProperty('--copyAccentTransformOrigin', 'right')
  }


    function changeBg (){
    let value = flags.flagBg ? 1 : 0
    let valueMin = flags.flagMinBg ? 0.8 : 0
    setFlags(prev=> ({flagBg: !prev.flagBg ,flagMinBg: !prev.flagMinBg}))
    console.log(flags)
    year.current.classList.toggle('changeBg')
    inner.current.style.setProperty('--opacityBg', value)
    asideImgCont.current.style.setProperty('--opacityMinBg', valueMin)
  }
  const blurLayerss = document.querySelectorAll('.blurLayer')


  function isBlur(){ 
    // setBlurFlag(prev => !prev)
    console.log(blurFlag)
    blurFlag.current = !blurFlag.current
    blur.current.classList.toggle('isBlur')
}

function unBlur(e){

  if (blurFlag.current) {
    blur.current.style.maskImage = `unset`;
    blur.current.style.webkitMaskImage = `unset`;
    return
  }

  // отключаем прокрутку при свайпе
  console.log(5555) 

if (isMobile) {e.preventDefault();
console.log(12345) 
alert() // отключаем прокрутку при свайпе
}
const evenet = isMobile ? e.touches[0] : e
// window.innerWidth < 600? e.preventDefault():""
  const x = evenet.clientX;
  const y = evenet.clientY;
  const radius = 100; // можно менять радиус круга здесь
// console.log(x,y)
  blur.current.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
  blur.current.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
};

const textDelay = 'We learned how to respect the Law on Level 24'.split(' ')
const delayRef = useRef({delays: [0], acc: 0})
function setDelay(){
textDelay.forEach(e=> {
let d =  e.length < 5 ? 0.3 : 0.6
  delayRef.current.delays.push(d+delayRef.current.acc)
 delayRef.current.acc += d
}
  )
}
function hideQuite(){
  setPreload('hidePreloader')
  console.log(12)
  setTitle('setTitle')
}
// window.innerWidth < 600?isMobile.current= true: isMobile.currentfalse
setDelay()

useEffect(()=>{
  window.innerWidth < 600?isMobile.current= true: isMobile.current=false
console.log(67)
    window.addEventListener('resize', () => {
    window.innerWidth < 600?isMobile.current= true: isMobile.current=false
    }
    )



  if (isMobile){
    window.addEventListener('touchmove', unBlur, { passive: false })
    , console.log('touch')
  } else {
    window.addEventListener('mousemove', unBlur) 
   }
},[])

  useEffect(()=>{
    

    // setIsMobile(window.innerWidth < 600?true:false)
  
// setDelay()
console.log(delayRef)

  
  
  psedoWindow.current.addEventListener('scroll', () => {
    let value = psedoWindow.current.scrollTop / 5
    asideImgCont.current.style.transform = `translateY(${-value}px)`
  })
  
  function parallaxSpacing(){
      let value = psedoWindow.current.scrollTop * 0.2
      titleCont.current.style.setProperty('--ls',value+'px')
      requestAnimationFrame(parallaxSpacing)
  }
  parallaxSpacing()
  

// !isMobile ? window.addEventListener('mousemove', unBlur), console.log('touch')
// : window.addEventListener('touchmove', unBlur, { passive: false })
  


const blur2 = document.getElementById('blurOverlay2');
const textcont = document.querySelector('.text')
blur2.style.height = textcont.clientHeight+'px'

//   textcont.addEventListener('mousemove', (e) => {
//       const rect = textcont.getBoundingClientRect(); // координаты блока
// const x = e.clientX - rect.left;
// const y = e.clientY - rect.top;
//     const radius = 100; // можно менять радиус круга здесь
//     blur2.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
//     blur2.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
//   });

  },[])
  return (
    <div className="App">

      <div className={`preloaderOutter ${isPreload}`} ref={preload}>
        <div className={`preloaderCont ${isTitle}`} ref={preloaderCont}>
        {textDelay.map((e,i)=>{
   return <>
 <h2 className="preloader" 
 onAnimationEnd={e==24?hideQuite:null}
 style={{'--delay':delayRef.current.delays[i]+'s',
 '--dur':e.length < 5 ? 0.25+'s' : 0.5+'s',
'--trigger':e==24?delayRef.current.acc:''}}
 data-labe={e}>{e}</h2>
 <h2>{"'\u00A0'"}</h2>
 </> 
}
)}
        </div>
      </div>

      <div className="outter" ref={psedoWindow}>
        
        <div className="inner" ref={inner}>
          

          <header>
          
            <nav>
              <ul className="lang">
                <li>
                  <a data-labe="ru" className="langText" id="ru" href="ru">ru</a>
                </li>
                <li>
                  <a data-labe="eng" className="langText" id="eng" href="ru">eng</a>
                </li>
              </ul>
            </nav>

            <a href="https://www.netflix.com/title/81128579">
              <img
                id="netflixLogo"
                src={netflixLogo}
                alt="netflix logo link"
              ></img>
            </a>

          </header>

          <div className="titleCont" ref={titleCont}>{
            'Platform'.split('').map((e,i)=><h2 className="title" key={'titleLetter '+ i}>{e}</h2>)
          }</div>

          <div className="blurButtonCont">
            <div className="blutInnerCont" onClick={isBlur}>
              <button id="blur">blur</button>
            </div>
          </div>

          <aside className="asideImgCont" ref={asideImgCont} onClick={changeBg}>

            <div className="yearCont">
              <div className="year" ref={year} data-labe="2024">
                2019
              </div>
            </div>

            <img
              className="asideImg"
              id="first"
              src={movie2019}
              alt="characters goreng and trimagisy"
            ></img>

            <img
              className="asideImg"
              id="second"
              src={movie2024}
              alt="main character form second movie"
            ></img>

          </aside>

          <div className="copyCont">
          The film "The Platform" is available on&nbsp;
          
            <a href="https://www.netflix.com/title/81128579" onMouseOut={accentOrigin} ref={copyAccent} className="copyAccent">Netflix</a>
          
          . All materials used on this site are the intellectual property of their respective copyright holders and are for informational purposes only.
              {/* Фильм «Платформа» доступен на <span className="copyAccent">Netflix</span>. Все материалы, использованные на этом сайте, являются интеллектуальной собственностью их правообладателей и размещены в ознакомительных целях. */}
            </div>
          {/* <!-- end of inner --> */}
        </div>


        <div className="blurLayer blur-overlay" id="blurOverlay" ref={blur}></div>
<div className="scrollSpace"></div>
        <div className="textCont">
          <div className="textContOverlay"></div>
          <div className="decorOutter">
          <DecorBg keyy={0} type={'up'}/>
<DecorBg keyy={1} type={'down'}/>

          </div>

          {/* vertical platform */}
          <div className="veticalOutter">

            <div className='verticalInner'>
               <div className="platform platformTop"></div> 
               <span className="verticalSpan">platform</span> 
               <div className="platform platformBottom"></div> 
                
            </div>
        
          </div>  
             

          <div className="text">
            <div className="blurLayer blur-overlay2" id="blurOverlay2"></div>
            <div className="desch2Cont">
              <h2 className="desch2">
                {/*  Сюжет */}
                description
              </h2>
            </div>
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
          <div className="linkMainCont"><a className="linkAcont" data-label='read more' href="">
            {'read more'.split('').map((e,i)=>
            <span className={`linkSymbol ${ e === " "?'space':'linkLetter'}`} 
               key={'linkLetter '+i}
               style={{'--delay':(i+1)*0.1+'s'}}
               data-label={e}
               >{e}</span>
               )}
            </a></div>
          {/* end of textcont */}
        </div>
        {/* end of outter */}
      </div>
      {/* enf of app */}
    </div>
  );
}

export default App;
