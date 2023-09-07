import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/About';
import Service from './components/services';

const Routing = ()=>{
  return(
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Service} />
      </Routes>
    </Router>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
