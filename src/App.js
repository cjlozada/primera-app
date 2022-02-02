import './App.css';
import List from './List/List';
import Menu from './Menu/Menu.js';
import './Menu/Menu.css';
import './List/List.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [
        { id: 0, rating: 1, title: 'Hola Mundo 1' },
        { id: 1, rating: 2, title: 'Hola Mundo 2: El regreso' },
        { id: 2, rating: 3, title: 'Hola Mundo 3: Con Venganza' },
        { id: 3, rating: 4, title: 'Hola Mundo 4: El Reboot' },
      ],
      copyBooks: []
    };
  }

  componentDidMount() {
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.books]
    }));
  }

  onAdd = (item) => {
    let temp = [... this.state.books];
    const id = temp[temp.length - 1].id++;
    item['id'] = id;
    temp.push(item);

    this.setState({ books: [...temp] });
    this.initBooks();
  }

  onSearch = (query) => {
    if (query === '') {
      this.initBooks();
    } else {
      const temp = [...this.state.books];
      let res = [];

      temp.forEach(item => {
        if(item.title.toLowerCase().indexOf(query) >-1){
          res.push(item);
        }
      });
      this.setState({copyBooks: [...res]});
    }
  }

  render() {
    return (
      <div className="app">
        <Menu title="Primera prueba" onadd={this.onAdd} onSearch={this.onSearch} />
        <List items={this.state.copyBooks} />
      </div>
    );
  }


}

export default App;
