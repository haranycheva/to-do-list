import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';

export const rootModal = document.querySelector("#modal");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App></App>
);