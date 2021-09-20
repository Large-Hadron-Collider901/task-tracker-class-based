import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css'
class App extends React.Component {
    state= {
      todos: [
        {
         id: 1,
         title: 'Abrams Vet Appointment',
         completed: 'false,'
        },
        {
          id: 2,
          title: 'Grocery Shopping',
          completed: 'false,'
         },
         {
          id: 3,
          title: 'JavaScript Test',
          completed: 'false,'
         },

      ]
    }
  render() {
  
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
