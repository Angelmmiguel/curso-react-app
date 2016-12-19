/**
 * Este fichero contiene el reducer principal de nuestra aplicación.
 * Basándonos en los tipos de las acciones, se realizaran modificaciones
 * sobre el estado inicial
 */

// Estado inicial de nuestra aplicación
const initialState = {
  search: '',
  loading: false,
  results: [],
  queried: false
}

/**
 * El reducer recibe el estado actual y la acción a ejecutar. Si el estado
 * no está definido, obtenemos el estado por defecto
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * Comenzamos la búsqueda
     */
    case 'SEARCH_START': {
      return Object.assign({}, state, { loading: true, search: action.search });
    }
    /**
     * La búsqueda ha terminado.
     */
    case 'SEARCH': {
      let results = [];

      if (!action.error) {
        results = action.payload;
      }

      return Object.assign({}, state, {
        loading: false, queried: true, results
      });
    }
    default: {
      // Es importante retornar por defecto el estado.
      // Si no retornamos nada en un Reducer, el estado se pierde
      return state;
    }
  }
}

export default reducer;
