import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const myFunction = (e) => {
  var element = document.getElementById("wrapper");
  element.classList.toggle("toggled");
}

var listGroup = document.getElementsByClassName("list-group")
listGroup.onClick = setTimeout(() => {
  myFunction()
}, 1000); 

window.addEventListener('resize', () => 
{
 if(window.innerWidth<700)
{
  var element = document.getElementById("wrapper");
  element.classList.remove("toggled");
}
}
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

