import React, {Component} from 'react';
import Navbar from './components/navbar';
import './App.css';
import Transactions from './components/transactions';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Transactions transactions={this.state.transactions}/>
      </React.Fragment>
    );
  }
  state = {
    transactions:
     [
      {id: 1, customer: "John", amount: 100, date: new Date(2019, 8, 7)},
      {id: 2, customer: "Mark", amount: 300, date: new Date()},
      {id: 3, customer: "Luc", amount: 100, date: new Date()},
      {id: 4, customer: "Paul", amount: 150, date: new Date(2019, 7, 10)},
      {id: 5, customer: "John", amount: 100, date: new Date()},
      {id: 6, customer: "Paul", amount: 50, date: new Date()},
      {id: 7, customer: "Paul", amount: 50, date: new Date('09/21/2019')},
      {id: 8, customer: "Alice", amount: 120, date: new Date(2019, 7, 15)},
      {id: 9, customer: "Alice", amount: 120, date: new Date(2019, 8, 5)}
    ]
  };
}

export default App;
