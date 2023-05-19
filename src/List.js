import axios from 'axios';
import React, { useEffect, useState } from "react";

let MyData = [''];
function List(){


const[ data, setData ] = useState(MyData);



useEffect(() => {
    getData();
},[""]);

    async function getData() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        // console.log(response.data);
        MyData = response.data;
        setData(MyData);
        
        // console.log(MyData);
    }

	return(
			<>
			<h1>List Data</h1>
			<p>{data.body}</p>
			
			<p>{data.title}</p>
			
			<p>{data.id}</p>
			
			<p>{data.userId}</p>

			</>
		);
}
export default List;