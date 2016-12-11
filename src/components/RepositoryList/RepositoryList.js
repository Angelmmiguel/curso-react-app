import React, { PropTypes } from 'react';

// Estilos
import './RepositoryList.css';

// Componentes
import RepositoryRow from '../RepositoryRow';

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
    search: PropTypes.string.isRequired
  }

  renderMessage() {
    let text = '', l = this.props.repositories.length;

    if (this.props.loading) {
      text = <span>Searching results for <b>{ this.props.search }</b></span>;
    } else if (l > 0) {
      text = <span>We found <b>{ l }</b> repositories for <b>{ this.props.search }</b></span>;
    } else {
      text = 'Type the name of a repository and hit enter';
    }
    // Return p
    return <p className="RepositoryList__Message">{ text }</p>;
  }

  /**
   * Render the RepositoryList component
   */
  render() {
    return <section className="RepositoryList">
      <h3>Results</h3>
      { this.renderMessage() }
      <table className="u-full-width">
        <tbody>
          { this.props.repositories.map(repo =>
            <RepositoryRow repo={ repo } key={ repo.id } />
          )}
        </tbody>
      </table>
    </section>;
  }
}

// Export the class
export default RepositoryList;
