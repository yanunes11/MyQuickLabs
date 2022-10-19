import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
// import sampleTodos from './sampleTodos.json';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AllTodos from './Components/AllTodos';
import AddEditTodo from './Components/AddEditTodo';

const TODOSURL = 'http://localhost/4000/todos';

function App() {

  const [getError, setGetError] = useState('');
  const [todos, setTodos] = useState({});
  useEffect(() => {
    const getData = async () => {
      setTodos(await getTodos());
    }
    setTimeout(() => {
      getData();
    }, 5000)
  }, []);

  const getTodos = async () => {
    try {    
      const res = await axios.get(TODOSURL); 
      return res.data.lenght > 0? {todos: res.data} : {error: 'there are no todos stored'}
    } catch (e) {
      setGetError('Data not available from server: ${e.mesage}');
      return {error: 'Data not available from server: ${e.mesage}'}
    }
  }

  const submitTodo = todo => {
    const updatedTodos = [...todos, todo];
    setTodos({todos: updatedTodos});
  }

  return (
    <div className="container">
      <Header />
      <div className="container">
        <AllTodos data={ todos } />
        <AddEditTodo submitTodo={submitTodo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
