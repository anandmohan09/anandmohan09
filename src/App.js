import React from 'react';
import './index.css';
import {add,sub,mul,div,mod} from './Calc';


function App(){
  return (
    <>
    <div>
      <ul>
        <li>Sum of two number is:{add(40,4)}</li>
        <li>Substraction of two number is:{sub(40,4)}</li>
        <li>Multiplication of two number is:{mul(40,4)}</li>
        <li>Division of two number is:{div(40,4)}</li>
        <li>Modulous of two number is:{mod(40,4)}</li>
  </ul>
  </div>
    </>
  )
}
export default App;