export function DecorBg({id, type}){

    function text(arg = id){
      return 'platform'.split('').map((e,i)=>
      <span className={`decorLetter ${e=='p'?'strokeP':''}`} 
        key={`${arg} - letter - ${i}`}
      >{e}</span>)
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
  