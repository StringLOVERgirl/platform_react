import netflixLogo from "../assets/netflix.webp"

export function Header({zindex = 0,setLang, translation,active}) {

    function ru() {
        if (active != 'true') return
        console.log('ru')
    
        setLang(_ => ({desc: translation.ru,
            quite: {
                first:translation.firstRu,
                second:translation.secondRu
            }  
        }))
    }


    function eng(){
        if (active != 'true') return
        setLang(_ => ({
            desc: translation.eng,
            quite: {
                first:translation.firstEng,
                second:translation.secondEng
            }  
        }))
    }
  
  
    return(
      
        <header style = {{zIndex:zindex}}>          
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
               alt="netflix logo link">
                </img>
            </a>
            
        </header>
    )
}