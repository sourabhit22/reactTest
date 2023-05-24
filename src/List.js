import axios from 'axios';
import React, { useEffect, useState } from "react";


let MyData = [''];

function List(){


const[ data, setData ] = useState(MyData);



useEffect(() => {
    getData();
},[""]);

    async function getData() {
        const response = await axios.get('https://gorest.co.in/public/v2/users');
        MyData = response.data;
        console.log(MyData);
        setData(MyData);
        
    }
        // console.log(data);

	return(
			<>
			<h1 style={{ color : 'red', textAlign: 'center' }}>List Data</h1>
			<select>
			{data.map(ab =>(

				<option key={ab.id}>{ab.name} --- {ab.email}</option>
			
			))}
			</select>
			</>
		);
}
export default List;