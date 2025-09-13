import {Link } from "react-router-dom"
import { Header } from "./header"
import { useState, useRef } from "react"
export function More (){


    return (
        <div className="more" 
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
        >
            <div className="blurLayer blur-overlay3"></div>
                    <Header></Header>
                    {/* <Link to="/" state={{from:'read'}}></Link> */}
                    <Link to="/"  state={{from:'more'}}
            style={{position:'absolute',color: 'var(--textColor)',fontFamily:'oswald',
             fontSize: '1.4em',
        top:0, left: '3em', left: '8em', paddingTop: '0.5em',
textDecoration: "none", textAlign: "center"}}
            >home</Link >
            <h1 className="h1More"
            style={{fontFamily: 'antonio', color: 'var(--textColor)', fontSize: '10em'}}
            >more</h1>
        </div>
    )
}