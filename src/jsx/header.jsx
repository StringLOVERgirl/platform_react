import netflixLogo from "../assets/netflix.webp"

export function Header({zindex = 0,setLang, translation,active}) {

  // quite: {
  //   first:translation.current.firstEng,
  //   second:translation.current.secondEng
  // },
  // desc:translation.current.eng})

  function ru(){
    if (active != 'true') return
    console.log('ru')

    setLang(prev=>({desc: translation.current.ru,
      quite: {
          first:translation.current.firstRu,
          second:translation.current.secondRu
        }  }))
  }


  function eng(){
  if (active != 'true') return
  setLang(prev=>({desc: translation.current.eng,
    quite: {
        first:translation.current.firstEng,
        second:translation.current.secondEng
      }  }))
  }
  
  

    return(
        <header style={{zIndex:zindex}}>
          
            <nav>
              <ul className="lang">
                <li>
                  <a data-labe="ru" className="langText" id="ru" onClick={ru}>ru</a>
                </li>
                <li>
                  <a data-labe="eng" className="langText" id="eng" onClick={eng}>eng</a>
                </li>
              </ul>
            </nav>

            <a href="https://www.google.com/search?q=platform+netflix" target="_blank">
              <img
                id="netflixLogo"
                src={netflixLogo}
                alt="netflix logo link"
              ></img>
            </a>

          </header>
    )
}