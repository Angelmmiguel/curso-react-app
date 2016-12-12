// Importamos el método para crear el store de redux
import { createStore } from 'redux';

// Importamos el reducer de nuestra aplicación
import Reducer from './reducers/reducer';

// Creamos el reducer
const store = createStore(Reducer);
export default store;
