import React from "react"
import * as ReactDOMClient from "react-dom/client"

const click = () => console.log('clicked');
const mouseOver = () => console.log('mouse over');

const helpText = 'Help text!';

const elements = (
  <div>
    <h1>Hello</h1>
    <input placeholder={helpText} className="text" onClick={click} onMouseEnter={mouseOver} />
    <p>lorem lor lorem: {helpText === 'Help text!' ? 'Yes' : 'No'}</p>
  </div>
)

const app = ReactDOMClient.createRoot(document.getElementById('app'))
app.render(elements)