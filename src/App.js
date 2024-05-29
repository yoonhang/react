import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';


const customers = [
  {
  'id' : '1',
  'img' : 'https://placeimg.com/128/128/any',
  'name' : '노리앤드1',
  'birthday' : '20240501',
  'gender' : 'man',
  'job' : '회사원'
  },
  {
    'id' : '2',
    'img' : 'https://placeimg.com/128/128/any',
    'name' : '노리앤드2',
    'birthday' : '20240502',
    'gender' : 'man2',
    'job' : '회사원2'
    },
    {
      'id' : '3',
      'img' : 'https://placeimg.com/128/128/any',
      'name' : '노리앤드3',
      'birthday' : '20240503',
      'gender' : 'man3',
      'job' : '회사원3'
      },
]

class App extends Component {
  render() {
    return (
      <div>
        {

        /* <Customer
          id = {customers[0].id}
          img = {customers[0].img}
          name = {customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id = {customers[1].id}
          img = {customers[1].img}
          name = {customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id = {customers[2].id}
          img = {customers[2].img}
          name = {customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job} */


          customers.map(c => {
            return (
              <Customer
                id={c.id}
                img={c.img}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          } )
        }
      </div>
    );
  }
}

export default App;
