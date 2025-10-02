import { Link } from "react-router-dom";
import { DecorBg } from "./decorbg"


export function FooterHome() {


    return(
        <footer className="textCont">
            <div className="textContOverlay"></div>

            <div className="decorOutter">
              <DecorBg keyy={0} type={'up'}/>
              <DecorBg keyy={1} type={'down'}/>
            </div>

            <div className="italicMainCont">
               <span className="italicMain">what is your favorite dish?</span>
            </div>
     
        <div className="linkMainCont">

           <Link className="linkAcont" 
          data-label='read more'
          href="" 
          to={"/more"}>
             {'read more'.split('').map((e,i) =>
                <span className={`linkSymbol ${ e === " " ? 'space' : 'linkLetter'}`} 
               key={'linkLetter ' + i}
               style={{'--delay': (i+1) * 0.1 + 's'}}
               data-label={e}>
                 {e}</span>
             )}
           </Link>
           {/* end of link main cont */}
        </div>

       {/* end of textcont */}
       </footer>
    )
}