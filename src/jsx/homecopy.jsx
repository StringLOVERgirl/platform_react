import { useRef } from "react"

export function Homecopy(){

    const copyAccent = useRef(null)

    function accentOrigin(){
        copyAccent.current.style.setProperty('--copyAccentTransformOrigin', 'right')
      }
    

    return(

        <div className="copyCont">
        The film "The Platform" is available on&nbsp;

        <a href="https://www.google.com/search?q=platform+netflix" target="_blank" 
          onMouseOut={accentOrigin} 
          ref={copyAccent} 
          className="copyAccent">Netflix
          </a>. All materials used on this site are the intellectual property of their respective copyright holders and are for informational purposes only.
            {/* Фильм «Платформа» доступен на <span className="copyAccent">Netflix</span>. Все материалы, использованные на этом сайте, являются интеллектуальной собственностью их правообладателей и размещены в ознакомительных целях. */}
      </div>  )
}