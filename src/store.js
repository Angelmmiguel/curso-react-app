// Importamos el método para crear el store de redux
import { createStore, applyMiddleware } from 'redux';

// Importamos el middleware
import promiseMiddleware from 'redux-promise';

// Importamos el reducer de nuestra aplicación
import Reducer from './reducers/reducer';

// Creamos el reducer
const store = createStore(
  Reducer,
  // Aplicamos el middleware
  applyMiddleware(promiseMiddleware)
);
export default store;
