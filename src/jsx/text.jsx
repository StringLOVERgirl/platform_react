import { Rate } from "./rate"
import { Homecopy } from "./homecopy"


export function Text({rate, platform, lang}) {

    return(
        <div className="text">

            {/* platform */}
            <div className="veticalOutter">
                <div className={`verticalInner ${platform.platform}`}>
                    <div className="platform platformTop"></div> 
                    <span className="verticalSpan">el hoyo</span> 
                    <div className="platform platformBottom"></div>     
                </div>
            {/* end of platform */}
            </div>

            <Rate rate={rate}></Rate>
       
            <div className="innerText">              
                <Homecopy></Homecopy>               
                {/* quoite */}
                <div className="quiteCont">                   
                    <div className="quiteBg"></div>
                  
                    <span className="quoite qu">
                      {lang.quite.first}
                    </span>
                   
                    <span className="quoite qu2">
                      {lang.quite.second}
                    </span>               
                </div>
               
                <div className="quiteDeepBg"></div>
                {/* end of quoite */}
                      
                <div className="descriptionCont">
                    <p id="movieDescription">
                      {lang.desc}
                    </p>
                </div>

            {/* end of inner text */}
            </div>

        {/* end of text */}
        </div>
    )
}