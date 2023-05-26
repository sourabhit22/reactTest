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

 const selectData = [
 			{id:1, name:'indore'},
 			{id:2, name:'uajjan'},
 			{id:3, name:'bhopal'},
 			{id:4, name:'jabalpur'},
 			{id:5, name:'dewas'},
 			{id:6, name:'mahu'},

 	]

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
				<h1 style={{ color : 'red' }}>{getStatus}</h1>
				<input type="text" name="name" value={getName} onChange={inputNameHandler} />
				<input type="number" name="trips" value={getTrip} onChange={inputTripHandler} />
				<input type="number" name="airId" value={getAir}  onChange={inputAirHandler}/>

				<select>
					{ selectData.map(e =>(
						<option key={e.id} value={e.id}>{e.name}</option>
						))}
					
				</select>



				<input type="button" name="button" value="Submit" onClick={ ()=> saveData() }/>

			</form>
			</>
		);
}
export default ContactUs;

