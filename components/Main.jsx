import React,{useEffect,useState} from "react";
  import {Link} from "react-router-dom";

function Main(){
 
  useEffect(() =>{
    fetchItems();
  },[]);
  const [items,setItems]=useState([]);

const fetchItems=async() => {
  const data=await fetch("https://panorbit.in/api/users.json");
  const items=await data.json();
  console.log(items.users);
  setItems(items.users)
}
  return (
     <div className="bgimagediv" >
      <div className="box">
     
       <h2 className="heading">Select an Contact</h2>
            <ul>
             { items.map((items,id) =>{
                return(<Link style={{textDecoration: 'none'}} to={`/user${items.id}`}><li key={items.id} className="liclass"><img className="liimg"src={items.profilepicture} />{items.name}</li></Link>)
              })}  
            </ul>
            </div>
    </div>
  );
}
export default Main;
