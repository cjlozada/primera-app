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

    this.onSearch = this.onSearch.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.remove = this.remove.bind(this);
    this.updateRating = this.updateRating.bind(this);
    
  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.books]
    }));
  }

  componentDidMount() {
    this.initBooks();
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

  remove(id){
    var temp = [...this.state.books];
    const res = temp.filter(item => item.id != id);

    this.setState({books: [...res]});
    this.initBooks();
  }

  updateRating(item){
    var temp = [...this.state.books];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index.rating] = item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }

  render() {
    return (
      <div className="app">
        <Menu title="Primera prueba" onadd={this.onAdd} onSearch={this.onSearch} />
        <List className="list" items={this.state.copyBooks} onremove={this.remove} onupdaterating={this.updateRating} />
      </div>
    );
  }


}

export default App;
