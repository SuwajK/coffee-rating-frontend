import React from 'react';

import Header from './components/Header'
import Ratings from './components/Ratings'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {UserContextProvider} from './contexts/UserContextProvider';
import CoffeeList from "./components/CoffeeList";
import Grinders from "./components/Grinders";
import LoginForm from "./components/LoginForm";


function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <Router>
        <Header/>
          <Switch>
            <Route path='/ratings'>
              <Ratings />
            </Route>
            <Route path='/coffees'>
              <CoffeeList />
            </Route>
            <Route path='/grinders'>
              <Grinders />
            </Route>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route exact path='/'>
              <Ratings />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
