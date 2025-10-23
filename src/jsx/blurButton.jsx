export function BlurHome({blurFlag, setBlur, userAgent}) {


    function isBlur(){ 
        console.log(blurFlag)
        blurFlag.current = !blurFlag.current
        setBlur(prev => prev =='isBlur' ? '' : 'isBlur')
    }


    return(
        <div className={`blurButtonCont ${userAgent.blurCont}`}>
            <div className="blutInnerCont" onClick={isBlur}>
               <button id="blur">blur</button>
            </div>
        </div>
    )
}
