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
  let [blurFlag, setBlurFlag] = useState(false)

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

  useEffect(()=>{

  

  const title = document.querySelector('.title')
  const blur = document.getElementById('blurOverlay');
  const blur2 = document.getElementById('blurOverlay2');
  const blurButton = document.getElementById('blur')
  const blurLayers = document.querySelectorAll('.blurLayer')
  // const asideImgCont = document.getElementsByClassName('asideImgCont')
   

  blurButton.onclick = () => { 
    setBlurFlag(prev => !prev)
    blurLayers.forEach(e=>e.classList.toggle('isBlur'))
}

  // event.preventDefault(); // отключаем прокрутку при свайпе

  // const touch = event.touches[0];

  // const text = "Ты научился уважать закон на 24 уровне"
  const text = 'We learned how to respect the Law on Level 24'
  const arrtext = text.split(' ')
  let delay = {value: 0}
  const preloaderCont = document.querySelector('.preloaderCont')
  const preload = document.querySelector('.preloaderOutter')

  function vars(h2, delay, dur, upd){
      h2.style.setProperty('--dur', dur+'s')
          h2.style.setProperty('--delay', delay.value+'s')
          delay.value+=upd
  }

   for (let i = 0; i < arrtext.length; i++){
      let h2 = document.createElement('h2')
      let bs = document.createElement('h2')
      h2.textContent = arrtext[i]
      bs.textContent = '"\u00A0"'
      h2.classList.add('preloader')
      if (arrtext[i].length<5){
    
          vars(h2, delay, 0.25, 0.3)
      } else {

          vars(h2, delay, 0.5, 0.6)
      }
      if (i == arrtext.length - 1){
          h2.style.setProperty('--trigger', delay.value )    
       h2.onanimationend = ()=>{
          preload.classList.add('hidePreloader')  
          preloaderCont.classList.add('hideTitle')
      }  
      }
      h2.setAttribute('data-labe', arrtext[i])
      preloaderCont.append(h2,bs)
   }
  console.log(arrtext)

  const psedoWindow = document.querySelector('.outter')
  
  psedoWindow.addEventListener('scroll', () => {
    let value = psedoWindow.scrollTop / 5
    asideImgCont.current.style.transform = `translateY(${-value}px)`
  })
  
  function parallax(){
      // console.log(psedoWindow.scrollTop)
      let value = psedoWindow.scrollTop * 0.2
      // console.log(value)
      titleCont.current.style.setProperty('--ls',value+'px')
      requestAnimationFrame(parallax)
  }
  parallax()
  
const textcont = document.querySelector('.text')
// console.log(textcont.clientHeight)
blur2.style.height = textcont.clientHeight+'px'

window.innerWidth > 600 ? window.addEventListener('mousemove', unBlur) : window.addEventListener('touchmove', unBlur, { passive: false })
  
  function unBlur(e){
    if (blurFlag) {return}
    // отключаем прокрутку при свайпе
  e.preventDefault(); // отключаем прокрутку при свайпе
  const evenet = window.innerWidth < 600 ? e.touches[0] : e
  // window.innerWidth < 600? e.preventDefault():""
    const x = evenet.clientX;
    const y = evenet.clientY;
    const radius = 100; // можно менять радиус круга здесь
// console.log(x,y)
    blur.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
    blur.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
  };

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

      <div className="preloaderOutter">
        <div className="preloaderCont"></div>
      </div>

      <div className="outter">
        
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
            <div className="blutInnerCont">
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


        <div className="blurLayer blur-overlay" id="blurOverlay"></div>
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
