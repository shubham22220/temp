import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tapp =()=>{

    const[city, setCity]= useState(null);
    const [search, setSearch]=useState("Delhi");

    useEffect(()=>{
        const fetchApi= async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=74b7dc980a27cb8db9325f860b052bdd`
            const response= await fetch(url);
            const resJson=await response.json();
            
            setCity(resJson.main);
        };
        fetchApi();
    
    },[search])
    return(
        
        <>
            <div className="box">
            
              <div className="inputData">
                  <input type= "search" value={search} className="inputField" 
                  onChange={(event)=>{ setSearch(event.target.value)}}/>
                  </div>

                  {!city ? (
                      <p>no data found</p>
                  ):(
                   <div>          
            <div className="info">
            <h2 className="location">
            <i className="fa-solid fa-location-arrow"></i>{search}
            </h2>
            <h1 className="temp">
            {city.temp}°Cel
            
            </h1>
            <h3 className="tempmin_max"> Min:  {city.temp_min}°Cel /  {city.temp_max}°Cel</h3>
            </div>

          
            </div>
        )} 
        </div>  
        </>         
         
    )
}

export default   Tapp;