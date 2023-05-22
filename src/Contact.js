import axios from 'axios';
import React, { useEffect, useState } from "react";

function ContactUs() {

const[ getName, setName] = useState('');
const[ getTrip, setTrip] = useState('');
const[ getAir, setAir] = useState('');
const[ getStatus, setStatus] = useState('');

const inputNameHandler = (e) => {
	setName(e.target.value);
}
const inputTripHandler = (e) => {
	setTrip(e.target.value);
}
const inputAirHandler = (e) => {
	setAir(e.target.value);
}

function saveData(){
 // const setStatus = '';
	const data = {
			method: 'POST',
            url: "https://api.instantwebtools.net/v1/passenger",
            data: {
            	'name': getName ,
            	'trips': getTrip,
            	'airline': getAir,
            }
          };

     axios(data) 
     	.then((result)=>{
     		console.log(result.statusText);
     		setStatus(result.statusText);
     	})
     	.catch((e)=>{
     		console.log(e);
     	}); 
}



	return(
			<>
			<h1>ContactUs</h1>
			<form>
				<h1>{getStatus}</h1>
				<input type="text" name="name" value={getName} onChange={inputNameHandler} />
				<input type="number" name="trips" value={getTrip} onChange={inputTripHandler} />
				<input type="number" name="airId" value={getAir}  onChange={inputAirHandler}/>

				<input type="button" name="button" value="Submit" onClick={ ()=> saveData() }/>

			</form>
			</>
		);
}
export default ContactUs;

