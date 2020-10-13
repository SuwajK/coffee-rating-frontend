import React from 'react';

import Header from './components/Header'
import Ratings from './components/Ratings'
import {UserContextProvider} from './contexts/UserContextProvider';


function App() {

  return (
    <div className="App">
      <UserContextProvider>
      <Header />
      <Ratings />
      </UserContextProvider>
    </div>
  );
}

export default App;
