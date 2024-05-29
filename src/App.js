import logo from './logo.svg';
import './App.css';
import Comp from "./Comp";



function App() {
  
  //let name = prompt("name : ?");
  //console.log('456',name);

  let day = new Date();
  let date = day.toLocaleString();

  console.log('456',date);
  
  
  return (
    
    <><Comp hello="comp test" />
    <div classNameName="App">
      <h2>..{date}</h2>
    </div></>


  )
}

export default App;
