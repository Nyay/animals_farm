import './App.css'
import React from "react";
import {IAnimal} from "./Animals/types";
import {Animal} from "./Animals/Animals";
import {useAnimalsSearch} from "./Animals/useAnimalsSearch";

function App() {

 const { onChangeCallback, currentQuery } = useAnimalsSearch();

 return <>
  <h1>Animal Farm</h1>
  <input type='text' placeholder='Search' onChange={(event) => onChangeCallback(event.target.value)}></input>
  <ul id='result'>
   {
    currentQuery.length ?
        currentQuery.map((animal:IAnimal) => <Animal key={animal.id}
            {...animal}
        />) :
        'No animals matching query'
   }
  </ul>
 </>
}

export default App
