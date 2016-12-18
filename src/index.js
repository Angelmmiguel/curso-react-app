// Styles
import './index.css';

// Importamos las distintas librerias
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Importamos los componentes
import { Router, Route, hashHistory } from 'react-router';
import BaseContainer from './containers/BaseContainer';
import DetailsContainer from './containers/DetailsContainer';
import About from './components/About';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ BaseContainer }>
        <Route path=":user/:repo" component={ DetailsContainer }/>
        <Route path="/about" component={ About }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
