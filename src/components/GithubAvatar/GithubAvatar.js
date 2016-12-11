import React, { PropTypes } from 'react';

// Estilos
import './GithubAvatar.css';

// Componentes
import ExternalLink from '../ExternalLink';

/**
 * Muestra un link con el nombre del usuario y su avatar
 */
class GithubAvatar extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    // Este objeto viene en las respuestas de la API de Github
    // Requerimos las propiedades que necesitamos
    author: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired
    }).isRequired
  }

  /**
   * Renderizamos el usuario
   */
  render() {
    let author = this.props.author;

    return <span className="GithubAvatar">
      <img className="GithubAvatar__Image" alt={ `${author.login}'s avatar` }
        src={ author.avatar_url }/>
      <ExternalLink to={ author.html_url }>{ author.login }</ExternalLink>
    </span>
  }
}

// Export the class
export default GithubAvatar;
