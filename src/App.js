import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/detail';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/detail/:id' component={Detail} />
      <Route path='/about' component={About} />
    </HashRouter>
  );
}

export default App;