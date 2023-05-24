import axios from 'axios';
import React, { useState } from "react";

function Service() {
const[ getName, setName] = useState('');
const[ getTrip, setTrip] = useState('');
const[ getAir, setAir] = useState('');
const[ getStatus, setStatus] = useState('');
const[ getCity, setCity] = useState('');

const inputNameHandler = (e) => {
	setName(e.target.value);
}
const inputTripHandler = (e) => {
	setTrip(e.target.value);
}
const inputAirHandler = (e) => {
	setAir(e.target.value);
}

const inputCityHandler = (e) => {
	setCity(e.target.value);
}
function saveData(){
 // const setStatus = '';
	const data = {
			method: 'POST',
            url: "http://127.0.0.1:8000/api/react_user",
            data: {
            	'name': getName ,
            	'contact': getTrip,
            	'email': getAir,
            	'city': getCity,
            }
          };

     axios(data) 
     	.then((result)=>{
     		console.log(result);
     		// setStatus(result.statusText);
     	})
     	.catch((e)=>{
     		console.log(e);
     	}); 
}



	return(
			<>
			<h1>Service</h1>
			<form>
				<h1 style={{ color : 'red' }}>{getStatus}</h1>
				<input type="text" name="name" value={getName} onChange={inputNameHandler} />
				<input type="text" name="city" value={getCity} onChange={inputCityHandler} />
				<input type="number" name="contact" value={getTrip} onChange={inputTripHandler} />
				<input type="email" name="email" value={getAir}  onChange={inputAirHandler}/>

				<input type="button" name="button" value="Submit" onClick={ ()=> saveData() }/>

			</form>
			</>
		);
}
export default Service;