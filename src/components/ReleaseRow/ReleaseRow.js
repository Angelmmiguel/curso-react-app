import React, { PropTypes } from 'react';

// Componentes
import ExternalLink from '../ExternalLink';
import FormattedDate from '../FormattedDate';
import GithubAvatar from '../GithubAvatar';

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
    let release = this.props.release;

    return <tr className="ReleaseRow">
      <td><ExternalLink to={ release.html_url }>{ this.releaseName }</ExternalLink></td>
      <td><GithubAvatar author={ release.author } /></td>
      <td><FormattedDate date={ release.published_at } /></td>
      { /* Podemos aplicar estilos inline usando objetos */}
      <td style={ { width: '185px' } }>
        <ExternalLink to={ release.zipball_url } className="ReleaseRow__Button button button-primary">
          .zip
        </ExternalLink>
        <ExternalLink to={ release.tarball_url } className="ReleaseRow__Button button">
          .tgz
        </ExternalLink>
      </td>
    </tr>;
  }
}

// Export the class
export default ReleaseRow;
