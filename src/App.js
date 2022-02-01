import './App.css';
import List from './List/List';
import Menu from './Menu/Menu.js';
import './Menu/Menu.css';
import './List/List.css';
import React from 'react';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state ={
          books:[
            {id:0, rating:1, title: 'Hola Mundo 1'},
            {id:1, rating:2, title: 'Hola Mundo 2: El regreso'},
            {id:2, rating:3, title: 'Hola Mundo 3: Con Venganza'},
            {id:3, rating:4, title: 'Hola Mundo 4: El Reboot'},
          ]
        };
    }

  render(){
    return (
    <div className="app">
      <Menu title="Primera prueba"/>
      <List items={this.state.books} />
    </div>
    );
  }


}

export default App;
