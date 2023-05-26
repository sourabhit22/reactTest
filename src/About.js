import ContactUs from './Contact';
import React, { useState } from 'react';
import axios from 'axios';

function About(props) {
	const id = props.id; 

 const [ getName, setName] = useState('');
 const [ getEmail, setEmail] = useState('');
 const [ getStatus, setStatus] = useState('');
 const [ getMsg, setMsg] = useState('');


 const inputNameHandler = (e) =>{
 		setName(e.target.value);
 }
 const inputEmailHandler = (e) =>{
 		setEmail(e.target.value);
 }

function updateData(){
	const update = {
			method : 'POST', 
			url : 'http://127.0.0.1:8000/api/user-edit',
			data : {
				'id' : id ,
				'name' : getName,
				'email' : getEmail,
			}
	};
	axios(update)
		.then((result)=>{
     		console.log(result.data.status);
     		setStatus(result.data.status);

     		if (getStatus === 'true') {
     			setMsg(`thanks!!! ${result.data.message}`);
     		} else {
     			setMsg(`opps!!! ${result.data.message}`);
     		}


     	})
     	.catch((e)=>{
     		console.log(e);
     	}); 

}

// console.log(getName);


	return(
			<>	
			<h1>About</h1>
			<h1>{id}</h1>
 			

 			<input type="text" name="id" value={id} />
 			<input type="text" name="name" value={getName} onChange={inputNameHandler} />
			<input type="email" name="email" value={getEmail}  onChange={inputEmailHandler} />

			<input type="button" name="button" value="Submit" onClick={ ()=> updateData() }/>

			<h1>{getMsg}</h1>
			</>
		);
}
export default About;