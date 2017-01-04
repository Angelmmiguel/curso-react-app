/**
 * Estos métodos nos ayudan a crear acciones que ejectuar de una manera
 * más sencilla
 */

// Comenzamos una nueva búsqueda
export const startSearch = search => {
  return {
    type: 'SEARCH_START',
    search
  }
}

// Retornamos los resultados
export const successSearch = results => {
  return {
    type: 'SEARCH_SUCCESS',
    results
  }
}

export const search = search =>
  dispatch => {
    // Lanzamos la acción startSearch
    dispatch(startSearch(search));

    // Realizamos la búsqueda
    fetch(`https://api.github.com/search/repositories?q=${ search }`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        // Almacenamos el resultado en redux
        dispatch(successSearch(res.items));
      })
      .catch(err => {
        console.log(err);
      });
  }
