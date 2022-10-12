import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import Header from './Components/Header'; // H9
import Footer from './Components/Footer'; // F8
import AllTodos from './Components/AllTodos';
import AddEditTodo from './Components/AddEditTodo';
function App() {
 return (
  <div className='container'>
    <Header />
    <div className='container'>
      <AllTodos/>
      <AddEditTodo/>
    </div>
    <Footer />
  </div>
 );
};
export default App;
