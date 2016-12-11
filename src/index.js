// Styles
import './index.css';

// Importamos las distintas librerias
import React from 'react';
import ReactDOM from 'react-dom';

// Importamos los componentes
import { Router, Route, browserHistory } from 'react-router';
import BaseContainer from './containers/BaseContainer';
import DetailsContainer from './containers/DetailsContainer';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ BaseContainer }>
      <Route path=":user/:repo" component={ DetailsContainer }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
