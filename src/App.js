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
import CoffeeMachineList from "./components/CoffeeMachinesList";
import Grinders from "./components/Grinders";


function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <Header/>
        <Router>
          <Switch>
            <Route path='/ratings'>
              <Ratings />
            </Route>
            <Route path='/coffees'>
              <CoffeeList />
            </Route>
            <Route path='/coffeemachines'>
              <CoffeeMachineList />
            </Route>
            <Route path='/grinders'>
              <Grinders />
            </Route>
            <Route path='/'>
              <Ratings />
            </Route>
          </Switch>


        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
