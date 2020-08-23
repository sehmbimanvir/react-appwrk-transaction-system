import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import AddTransaction from './pages/AddTransaction';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <div className="row mt-4 mb-5">
        <div className="col-md-12 text-center">
          <h2><Link to="/">Transaction System</Link></h2>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/transactions/add" component={AddTransaction} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
