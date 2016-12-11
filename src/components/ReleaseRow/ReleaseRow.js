import React, { PropTypes } from 'react';

// Componentes
import ExternalLink from '../ExternalLink';

/**
 * Muestra una release de un repositorio
 */
class ReleaseRow extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    release: PropTypes.object.isRequired
  }

  // Retornamos el nombre basándonos en el Name o el tag si el primero no está
  // disponible
  get releaseName() {
    let release = this.props.release;
    return release.name !== '' ? release.name : release.tag_name;
  }

  /**
   * Render the ReleaseRow component
   */
  render() {
    return <tr>
      <td><ExternalLink to={ this.props.release.html_url }>{ this.releaseName }</ExternalLink></td>
      <td><date>{ this.props.release.published_at }</date></td>
    </tr>;
  }
}

// Export the class
export default ReleaseRow;
