import React,{ useState } from "react";
 import './room.css';

function Room() {
    //const state=useState(true);
    //console.log("State=",state);
    let [isLit,setLit]=useState(false);
    let [age,setAge]=useState(40);
    /*function updateLit(){
        setLit(!isLit);
    }
    function increaseAge(){
       setAge(++age);
    }*/
  return (
    <div className={`room ${isLit? "lit" : "dark"} `}> 
    Room is {isLit? "Lit" : "Dark"} <br/><br/>
    Age : {age}<br/>
    <button onClick={()=>setLit(!isLit)} >Toggle light</button> <br/>
    <button onClick={() =>setAge(++age)}>Increase age</button> 

    
    </div>
  );
}

export default Room;