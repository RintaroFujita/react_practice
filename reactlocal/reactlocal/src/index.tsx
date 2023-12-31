import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import Hello from './components/Hello'
import reportWebVitals from './reportWebVitals';
// import Parent from './components/ContainerSample';
// import Message from './components/Message';
// import ContextSample from './components/ContextSample'
// import Counter from './components/Counter';
import ImageUploader from './components/ImageUploader'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ImageUploader />
    {/* Counter initialValue={0} */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
