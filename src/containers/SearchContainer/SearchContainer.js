import React, { PropTypes } from 'react';

// Importamos los componentes
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';

/**
 * Muestra un buscador, así como la lista de resultados. Este componente manda
 * las peticiones a la API de Github y retorna los datos a los componentes de
 * tipo presential.
 */
class SearchContainer extends React.Component {
  /**
   * Props del component
   */
  static propTypes = {
    example: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      loading: false,
      results: []
    }
  }

  /**
   * Este método actua como callback del evento onSubmit del formulario.
   * Recibe como parámetro el campo que debe de buscar.
   */
  onSubmit = value => {
    // Almacenamos el valor
    this.setState({ search: value, loading: true });
    // Realizamos la petición a la API
    fetch(`https://api.github.com/search/repositories?q=${ value }`)
      .then(res => {
        return res.json().then(json => {
          return Promise.resolve({
            body: json,
            status: res.status,
            error: (res.status < 200 || res.status >= 300)
          })
        });
      })
      .then(res => {
        if (!res.error) {
          this.setState({ results: res.body.items, loading: false });
        } else {
          // TODO: Mostrar los errores
          console.err('Error with search')
        }
      })
  }

  /**
   * Render the SearchContainer component
   */
  render() {
    return <section>
      <SearchForm onSubmit={ this.onSubmit } />
      <RepositoryList repositories={ this.state.results }
        loading={ this.state.loading } search={ this.state.search }/>
    </section>
  }
}

// Export the class
export default SearchContainer;
