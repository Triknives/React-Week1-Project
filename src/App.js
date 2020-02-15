import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeUpdateList from './components/HomeUpdateList'
import TapList from './components/TapList'
import DishesList from './components/DishesList'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/taplist' component={TapList} />
    <Route exact path='/homeupdatelist' component={HomeUpdateList} />
    <Route exact path='/disheslist' component={DishesList} />
    </Switch>
    </div>
  );
}
export default App;
