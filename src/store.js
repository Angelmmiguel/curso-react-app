// Importamos el método para crear el store de redux
import { createStore, applyMiddleware } from 'redux';

// Importamos la librería
import thunk from 'redux-thunk';

// Importamos el reducer de nuestra aplicación
import Reducer from './reducers/reducer';

// Creamos el reducer
const store = createStore(
  Reducer,
  // Aplicamos el middleware
  applyMiddleware(thunk)
);
export default store;
