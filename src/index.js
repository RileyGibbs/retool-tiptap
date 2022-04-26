import React from 'react';
import ReactDOM from 'react-dom';
import { default as RetoolEditor } from "./retool-editor";

const RetoolConnectedComponent = Retool.connectReactComponent(RetoolEditor);
document.body.setAttribute('style', 'margin: 0;') 
ReactDOM.render(
  <RetoolConnectedComponent/>, 
  document.body.appendChild(document.createElement('div')) 
);