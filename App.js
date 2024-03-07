import logo from './logo.svg';
import './App.css';
import { useState,useMemo } from 'react';

function App() {
  const[count,setCount]=useState(0);
  const[item,setItem]=useState(10);

  // function Multicount(){
  //   console.log("Multicount")
  //   return count*5
  // }

  const Multicount=useMemo(function Multicount(){
      console.log("Multicount")
       return count*5
     },[count])

  return (
    <div className="App">
      <h1> USE MEMO hooks</h1>
      <h2>{count}</h2>

      <h2>{item}</h2>
     <h2> {Multicount}</h2>


<button onClick={()=>setCount(count+1)}>update-count</button>
<button onClick={()=>setItem(item*10)}>update-item</button>



    </div>
  );
}

export default App;
