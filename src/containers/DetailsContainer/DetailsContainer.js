import React, { PropTypes } from 'react';

// Componentes
import ReleaseList from '../../components/ReleaseList';

/**
 * Este container muestra los detalles para un repo concreto. Se renderiza cuando
 * un usuario accede a /:user/:repo. En el veremos la lista de releases con
 * los detalles de cada una de ellas.
 */
class DetailsContainer extends React.Component {
  /**
   * Props del component
   */
  static propTypes = {
    // Este objeto contiene los valores de los campos definidos en Router
    // para la URL. En este caso, tendremos :user y :repo
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired
    }).isRequired
  };

  /**
   * Inicializamos el estado
   */
  constructor(props) {
    super(props);

    this.state = {
      releases: [],
      loading: true
    }
  }

  // Load the data
  componentDidMount() {
    fetch(`https://api.github.com/repos/${ this.repoName }/releases`)
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
          this.setState({ releases: res.body, loading: false });
        } else {
          // TODO: Mostrar los errores
          console.log('Error fetching releases');
          this.setState({ loading: false });
        }
      })
  }

  // Devuelve el nombre del repo
  get repoName() {
    return `${this.props.params.user}/${this.props.params.repo}`;
  }

  /**
   * UI del contenedor
   */
  render() {
    return <section>
      <h2>Releases of <b>{ this.repoName }</b></h2>
      <ReleaseList data={ this.state.releases } loading={ this.state.loading }
        repoName={ this.repoName } total={ this.state.releases.length }
        itemsPerPage={ 5 }/>
    </section>;
  }
}

// Export the class
export default DetailsContainer;
