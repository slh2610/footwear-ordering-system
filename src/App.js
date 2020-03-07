import React from 'react';
import api from './api/footwearOrders.js';
import OrderPage from './components/OrderPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/orders">
          <OrderPage api={api} />;
        </Route>
      </div>
    </Router>
  );
}

export default App;
