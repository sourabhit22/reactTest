import ContactUs from './Contact';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


let MyData = [''];
function About(props) {
	const id = props.id; 

 const[ data, setData ] = useState(MyData);


 const [ getName, setName] = useState('');
 const [ getEmail, setEmail] = useState('');
 const [ getStatus, setStatus] = useState('');
 const [ getMsg, setMsg] = useState('');

useEffect(()=>{
	getData();
},['']);
 async function getData() {
        const response = await axios.get('http://127.0.0.1:8000/api/user-edit/'+id);
        console.log(response);
        MyData = response.data.data;
        // console.log(MyData);
        setData(MyData);

        setEmail(response.data.data.email);
        setName(response.data.data.name);
    }

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
     		console.log(result);
     		setStatus(result.data.status);

     		if (getStatus === 'true') {
     			setMsg(result.data.message);
     		} else {
     			setMsg(result.data.message);
     		}

     		getData();

     	})
     	.catch((e)=>{
     		console.log(e);
     	}); 

}
const ClickButton = (e) =>{

console.log('this is:', this);
}


	return(
			<div style={{ textAlign:'center', }}>	
			<h1>About</h1>
			<h4>{id}</h4>
			<h4>{data.name}</h4>
			<h4>{data.email}</h4>
			<h4>{data.contact}</h4>
			<button onClick={ClickButton.bind(this, id)}>Click here</button>
 			

 			<input type="text" name="id" value={id} readOnly />
 			<input type="text" name="name" value={getName} onChange={inputNameHandler} />
			<input type="email" name="email" value={getEmail}  onChange={inputEmailHandler} />

			<input type="button" name="button" value="Submit" onClick={ ()=> updateData() }/>



			<h1>{getMsg}</h1>
			</div>
		);
}
export default About;