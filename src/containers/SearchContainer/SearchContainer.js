import React, { PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import { startSearch, successSearch } from '../../actions/actions';

// Importamos los componentes
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';

/**
 * Muestra un buscador, así como la lista de resultados. Este componente manda
 * las peticiones a la API de Github y retorna los datos a los componentes de
 * tipo presential.
 */
class SearchContainer extends React.Component {
  // Definimos los props que nos deben de llegar
  static propTypes = {
    // Dispatch es la funcion que utilizamos para lanzar acciones contra el store.
    // Esta función la proporciona connect.
    dispatch: PropTypes.func.isRequired,
    // Valores del estado
    loading: PropTypes.bool.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    search: PropTypes.string.isRequired,
    queried: PropTypes.bool.isRequired
  }

  // Inicializamos el estado
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    // Ya no necesitamos el estado! Todo está en los props
    // this.state = { ... }
  }

  /**
   * Este método actua como callback del evento onSubmit del formulario.
   * Recibe como parámetro el campo que debe de buscar.
   */
  onSubmit = value => {
    // Lanzamos la accion!
    this.props.dispatch(startSearch(value));
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
          // Almacenamos el resultado en redux
          this.props.dispatch(successSearch(res.body.items));
        } else {
          // TODO: Mostrar los errores
          console.error('Error with search')
        }
      })
  }

  /**
   * Render the SearchContainer component
   */
  render() {
    return <section>
      <SearchForm onSubmit={ this.onSubmit } search={ this.props.search } />
      <RepositoryList data={ this.props.results } total={ this.props.results.length }
        loading={ this.props.loading } search={ this.props.search }
        queried={ this.props.queried } />
    </section>
  }
}

// Esta funcion nos convierte valores del estado de Redux a props del
// componente
const mapStateToProps = state => {
  // En este caso nos interesan todas las variables del estado, por lo que podríamos
  // devolver una copia de State. Las separamos y las volvemos así a modo
  // ilustrativo
  let { search, loading, results, queried } = state;
  return { search, loading, results, queried };
}

// Connect es un HOC! Modifica los props de nuestro componente para incluir
// dispatch, así como los valores que obtengamos del estado
export default connect(mapStateToProps)(SearchContainer);
