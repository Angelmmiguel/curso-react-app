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
    return <HintMessage>{ text }</HintMessage>;
  }

  /**
   * Render the RepositoryList component
   */
  render() {
    return <section className="RepositoryList">
      <h2>Results</h2>
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
