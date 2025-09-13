import netflixLogo from "../assets/netflix.webp"

export function Header() {

    return(
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
    )
}