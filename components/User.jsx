import React from "react";
import image from "./map.png";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";

function User({match}){
  
    useEffect(() =>{
        fetchItems();
      },[]);
     
      var [item,setItem]=useState([]);
      var [company,setCompany]=useState([]);
      var [address,setAddress]=useState([]);
    
    const fetchItems=async() => {
      var data=await fetch("https://panorbit.in/api/users.json");
      var item=await data.json();
      var idd=match.params.id;
      const a=1;
      setItem(item.users[idd-a])
      setCompany(item.users[idd].company)
      setAddress(item.users[idd].address)
     
      return (item,company,address);
    
    }
    
        return(
            <>
            <div className="maindivsecondpage">
            <div className="divv2"> 
            
            <div className="profilediv">
              
               <Link to={"/"} style={{textDecoration: 'none' ,color:'white'}}> <p>Profiles</p></Link>
               <Link to={"/post"} style={{textDecoration: 'none' ,color:'white'}}> <p>Post</p></Link>
               <Link to={"/gallary"} style={{textDecoration: 'none' ,color:'white'}}> <p>Gallary</p></Link>
               
               <Link to={"/todo"} style={{textDecoration: 'none' ,color:'white'}}> <p>ToDo</p></Link>
                
        
            </div>

            </div>
            <div className="divv3">

                <div className="divv4">
                  <p className="profilena">Profile </p>
                  <p className="headh2">{item.name}</p>
                  <img className="headimg"src={item.profilepicture}></img>
                
                </div>

                <div className="divv5">
                     <img className="prifuleimg" src={item.profilepicture}></img>
        <p className="profiledeading1">{item.name}</p>

                     <p className="profiledetails1"><span className="detailname1">Username&nbsp;:&nbsp;</span>{item.username}</p>
                      <p className="profiledetails1"><span className="detailname1">&emsp;&nbsp;&nbsp;&nbsp;e-mail&nbsp;:&nbsp;</span>{item.email}</p>
                      
                      <p className="profiledetails1"><span className="detailname1">&nbsp;&nbsp;&emsp;Phone&nbsp;:&nbsp;</span>{item.phone}</p>
                      <p className="profiledetails1"><span className="detailname1">&nbsp;&nbsp;&nbsp;Website&nbsp;:&nbsp;</span>{item.website}</p>
                      <div className="companydiv">
                      <p className="companyeading">Company</p>
                      <p className="profiledetails1"><span className="detailname1">&nbsp;&nbsp;&emsp;Name&nbsp;:&nbsp;</span>{company.name}</p>
                      <p className="profiledetails1"><span className="detailname1">Catchphr&nbsp;:&nbsp;</span>{company.catchPhrase}</p>
        <p className="profiledetails1"><span className="detailname1">&emsp;&emsp;&emsp;bs&nbsp;:&nbsp;</span>{company.bs}</p>
                      
                      </div>
                </div>

                <div className="divv6">
                <p className="Addressheading">Address:</p>
                     < p className="profiledetails1"><span className="detailname1">&nbsp;&nbsp;&nbsp;&nbsp;Street&nbsp;:&nbsp;</span>{address.street}</p>
        < p className="profiledetails1"><span className="detailname1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suite&nbsp;:&nbsp;</span>{address.suite}</p>
                     < p className="profiledetails1"><span className="detailname1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City&nbsp;:&nbsp;</span>{address.city}</p>
                     < p className="profiledetails1"><span className="detailname1">Zipcode&nbsp;:&nbsp;</span>{address.zipcode}</p>
                     
                     <img className="mapimage"src={image} />                    
                </div>
            </div>
            </div>
            </>
        )
        
      }
export default User;
