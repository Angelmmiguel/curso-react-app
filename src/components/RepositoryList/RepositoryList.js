import React, { PropTypes } from 'react';

// Componentes
import RepositoryRow from '../RepositoryRow';
import HintMessage from '../HintMessage';

/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    // Este parámetro indica si se ha realizado una peticion previamente
    query: PropTypes.bool.isRequired
  }

  renderMessage() {
    let text = '', l = this.props.repositories.length;

    if (this.props.loading) {
      text = <span>Searching results for <b>{ this.props.search }</b></span>;
    } else if (l > 0) {
      text = <span>We found <b>{ l }</b> repositories for <b>{ this.props.search }</b></span>;
    } else if (l === 0 && this.props.query) {
      text = <span>
        We could't find any repositories matching <b>{ this.props.search }</b>. Try another terms please.
      </span>;
    } else {
      text = 'Type the name of a repository and hit enter';
    }
    // Return p
    return <HintMessage>{ text }</HintMessage>;
  }

  // Renderizamos la tabla si no estamos cargando resultados
  renderTable() {
    if (this.props.loading || this.props.repositories.length === 0) {
      return null;
    } else {
      return <table className="u-full-width">
        <thead>
          <tr>
            <th>Repository</th>
            <th>Owner</th>
            <th>Stars</th>
            <th>Forks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { this.props.repositories.map(repo =>
            <RepositoryRow repo={ repo } key={ repo.id } />
          )}
        </tbody>
      </table>;
    }
  }

  /**
   * Render the RepositoryList component
   */
  render() {
    return <section className="RepositoryList">
      <h2>Results</h2>
      { this.renderMessage() }
      { this.renderTable() }
    </section>;
  }
}

// Export the class
export default RepositoryList;
