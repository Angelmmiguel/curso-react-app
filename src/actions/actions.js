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
