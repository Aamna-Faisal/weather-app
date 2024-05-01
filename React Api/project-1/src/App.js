import logo from './logo.svg';
import { FaSearch } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import image from "./images.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiWindSlap } from "react-icons/gi";
import { GiWaves } from "react-icons/gi";



import './App.css';
import { useEffect, useState } from 'react';
import { CiCloudSun } from "react-icons/ci";

function App() {
  const[result, setresult]=useState({})
  const[city,setCity]=useState("")
  const API={
    key:"0521142f9c48689605ee4e3da8a0cfef",
    url: "https://api.openweathermap.org/data/2.5/weather"
}
const handleclick=()=>{
  console.log(city, "city");
  fetch(`${API.url}?q=${city}&appid=${API.key}`)
  .then(res=> res.json())
  .then(data=>{
  //  console.log(data);
   setresult(data)
   
  })
 }
 

useEffect(()=>{
       fetch(`${API.url}?q=karachi&appid=${API.key}`)
       .then(res=> res.json())
       .then(data=>{
        // console.log(data);
        setresult(data)
       })
      },[])
      console.log(result)

  return (
    <div className="App"> 
 {/* <h1>weather</h1>   */}
 <div className='bg'>
  <br></br>
  <input type="text" name="write city name" onChange={(e)=>setCity(e.target.value)} placeholder='weather' style={{width: "80%" , height:"25px"}}> 
   </input> 
   
 <button type='button' onClick={handleclick}  style={{width:"40px", height:"5vh"}}><FaSearch /></button>
 <br />
 <img src={image} alt='image' style={{width:"50%", height:"180px"}}/>
 <h1> <b style={{fontSize:"55px", fontFamily:"monospace"}}><CiCloudSun />{result.main && result.main.temp}</b><sup>o</sup>C <br/> {result.name && result.name} </h1>
 
  <div className='grid'> 
 <div style={{backgroundColor:"#ECECEC", width:"120px", height:"20vh" ,borderStyle:"solid", borderColor:"#DEDEDE"}}><h2 style={{color:"#77b5fe"}} >{result.main && result.main.humidity}%<br></br><FaDroplet /></h2><h3>Humidity</h3></div>
  <div style={{backgroundColor:"#ECECEC", width:"120px", height:"20vh", borderStyle:"solid", borderColor:"#DEDEDE"}}><h2 style={{color:"#77b5fe"}} >{result.wind && result.wind.speed}<br></br><GiWindSlap /></h2><h3>Wind Flow</h3></div>
  <div style={{backgroundColor:"#ECECEC", width:"120px", height:"20vh", borderStyle:"solid", borderColor:"#DEDEDE"}}><h2 style={{color:"#77b5fe"}} >{result.main && result.main.pressure}<br></br><GiWaves /></h2><h3>Pressure</h3></div>

  </div>
  







{/* <p>{city}</p> */}
  
   {/* <h1> {result.main && result.main.humidity}%</h1>  */}
   </div>
  </div>
    );

}

export default App;

