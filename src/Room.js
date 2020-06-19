import React,{ useState } from "react";
 import './room.css';

function Room() {
    //const state=useState(true);
    //console.log("State=",state);
    let [isLit,setLit]=useState(false);
    //let [age,setAge]=useState(40);
    let [temp,setTemp]=useState(22);
    /*function updateLit(){
        setLit(!isLit);
    }
    function increaseAge(){
       setAge(++age);
    }*/
  return (
    <div className={`room ${isLit? "lit" : "dark"} `}> 
    Room is {isLit? "Lit" : "Dark"} <br/><br/>
    
    <button onClick={()=>setLit(true)} >LIGHT ON</button> 
    <button onClick={()=>setLit(false)} >LIGHT OFF</button> <br/><br/>
    
    Temperature : {temp} Celcius<br/><br/>
    <button  onClick={() =>setTemp(++temp)}>Increase Temperature</button> 
    <pre></pre>
  
    <button onClick={() =>setTemp(--temp)}>Decrease Temperature</button>

    
    </div>
  );
}

export default Room;