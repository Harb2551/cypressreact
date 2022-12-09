import logo from './logo.svg';
import './App.css';
import React,{useEffect, useRef, useState} from "react";

function App() {

  var [text,setText] = useState('');
  var count = useRef(0);

  useEffect(()=>{
    count.current = count.current + 1;
  });

  return (
    <div className="App">
      <h1><b>UseRef in React</b></h1>
      <input type ="text" placeholder="Enter Text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <h3 > This page is rendered {count.current} times </h3>
    </div>
  );
}

export default App;
