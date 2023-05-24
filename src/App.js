import logo from './logo.svg';
import './App.css';
import {User, User2} from './User';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Service from './Service';
import ContactUs from './Contact';
import List from './List';
import axios from 'axios';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
              <Header></Header>
          <Routes>
               <Route path ="/about" element={ <About name={'nishu'} /> } />
               <Route path ="/user" element={ <User /> } />
               <Route path ="/service" element={ <Service /> } />
               <Route path ="/contact" element={ <ContactUs /> } />
               <Route path ="/list" element={ <List /> } />
          </Routes>
              <Footer></Footer>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
