import React from 'react';
// import ReactDOM from 'react-dom/client'; react v18 에서 생긴 모듈
import ReactDOM from 'react-dom'; // react v17 에서 생긴 모듈
import App from './App';
import "./css/style.css";

// const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
    <App />
);
*/
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

