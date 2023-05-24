import ContactUs from './Contact';

function About(props) {
	const name = props.name; 
	return(
			<>	
			<h1>About</h1>
			<h1>{name}</h1>
			</>
		);
}
export default About;