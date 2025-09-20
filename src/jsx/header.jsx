import netflixLogo from "../assets/netflix.webp"

export function Header({zindex = 0}) {

    return(
        <header style={{zIndex:zindex}}>
          
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