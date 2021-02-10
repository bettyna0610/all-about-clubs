import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import {IntlProvider} from "react-intl"
import Spanish from "./languages/Spanish.json"
import English from "./languages/English.json"
import German from "./languages/German.json"

const local = navigator.language
let lang;
if(local === "en") {
lang = English;
} else if (local === "es") {
  lang = Spanish
} else {
  lang = German
}

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={local} messages={German}>
    <App />
    </IntlProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
