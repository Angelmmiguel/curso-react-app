import React, { PropTypes } from 'react';

// Componentes
import HintMessage from '../HintMessage';
import ReleaseRow from '../ReleaseRow';

/**
 * Muestra la lista de Releases
 */
class ReleaseList extends React.PureComponent {
  /**
   * Props of the component
   */
  static propTypes = {
    releases: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    repoName: PropTypes.string.isRequired
  }

  renderMessage() {
    let text = '';

    if (this.props.loading) {
      text = <span>Retrieving releases of <b>{ this.props.repoName }</b></span>;
    } else if (this.props.releases.length === 0) {
      text = <span><b>{ this.props.repoName }</b> doesn't have any public release</span>;
    } else {
      text = <span>Showing <b>{ this.props.releases.length }</b> releases of <b>{ this.props.repoName }</b></span>;
    }

    return <HintMessage>{ text }</HintMessage>;
  }

  // Renderizamos la tabla si no estamos cargando resultados
  renderTable() {
    if (this.props.loading || this.props.releases.length === 0) {
      return null;
    } else {
      return <table className="u-full-width">
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Release date</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          { this.props.releases.map(release =>
            <ReleaseRow release={ release } key={ release.id } />
          )}
        </tbody>
      </table>;
    }
  }

  /**
   * Render the ReleaseList component
   */
  render() {
    return <div>
      { this.renderMessage() }
      { this.renderTable() }
    </div>;
  }
}

// Export the class
export default ReleaseList;
