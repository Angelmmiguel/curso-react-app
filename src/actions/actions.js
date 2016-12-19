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

export const search = value => {
  return {
    type: 'SEARCH',
    payload: fetch(`https://api.github.com/search/repositories?q=${ value }`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      return res.items;
    })
    .catch(err => {
      // Mostramos el error por consola
      console.log(err);
      return null;
    })
  }
}
