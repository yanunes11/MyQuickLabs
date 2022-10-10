import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import Header from './Components/Header'; // H9
import Footer from './Components/Footer'; // F8
function App() {
 return (
  <div className='container'>
    <Header />
    <div className='container'>
      <h1>Other UIs go here</h1>
    </div>
    <Footer />
  </div>
 );
};
export default App;
