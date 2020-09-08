import React from "react";
import {Link} from "react-router-dom"
function Gallary(){
    return(<Link to={"/"} style={{textDecoration: 'none' ,color:'white'}}><h1 style={{height:"100vh",textAlign:"center"}}>i am Gallary page click to got back</h1></Link>)    
}
export default Gallary;