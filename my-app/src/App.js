import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Timer } from "./timer";
import { StartButton } from "./StartButton";
import { useEffect, useState } from "react";
import{Menu} from"./menu.js"


function App() {
  // (async () => {
  //   const rawResponse = await fetch('http://intern-2022.arpify.com/init', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: {
  //       "firstName":"Tigran",
  //        "lastName":"Aghajanyan",
  //        "birthDay": "20.02.2003" ,
  //        "gender": "male"
  //     }
      
  //   });
  //   const content = await rawResponse.json();
  
  //   console.log(content);
  // })();

  fetch('http://intern-2022.arpify.com/init', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
           "firstName":"Tigran",
           "lastName":"Aghajanyan",
           "birthDay": "20.02.2003" ,
           "gender": "male"
       }
        )
})
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartButton ></StartButton>} />
        <Route path="/timer" element={<Timer   />} />
      </Routes>

    </div>
  );
}

export default App;
