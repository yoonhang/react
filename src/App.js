import React, {Component} from 'react';
import './App.css';
import Comp from "./Comp";
import Customer from './components/Customer';


const customer = {
  'name' : '노리앤드',
  'birthday' : '20240505',
  'gender' : 'man',
  'job' : '회사원'
}


class App extends Component {
  render() {
    return (
      <Customer
        name = {customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}


export default App;
