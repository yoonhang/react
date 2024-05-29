import logo from './logo.svg';
import './App.css';

function App() {
  // let name = prompt("name : ?");
  // console.log('name : ', name)
  let day = new Date();
  console.log('day : ', day)  
  
  
  return (
    <><div className="App">

      <form className="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">test<i className="fa fa-search"></i></button>
      </form>
    </div><h2>{day}</h2>
    </>
  );


}


export default App;
