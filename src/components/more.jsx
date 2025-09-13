import {Link } from "react-router-dom"

export function More (){

    return (
        <div className="more" 
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
        >
            <Link to='/'
            style={{position:'absolute',color: 'var(--textColor)',fontFamily:'oswald',
             fontSize: '1.4em',
        top:0, left: '3em', paddingLeft: '5em', paddingTop: '0.5em',
textDecoration: "none", textAlign: "center", zIndex: 1}}
            >home</Link >
            <h1 
            style={{fontFamily: 'antonio', color: 'var(--textColor)', fontSize: '10em'}}
            >more</h1>
        </div>
    )
}