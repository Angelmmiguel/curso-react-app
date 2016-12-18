import React from 'react';

// Componentes
import ExternalLink from '../ExternalLink';

/**
 * Página de About
 */
class BaseComponent extends React.Component {
  /**
   * Nunca debemos de actualizar este componente
   */
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  get openWebinarsLink() {
    return 'https://openwebinars.net/cursos/react-js/';
  }

  /**
   * Render the BaseComponent component
   */
  render() {
    return <section className="About">
      <p>Esta aplicación es parte del curso de React impartido en
        { ' ' }<ExternalLink to={ this.openWebinarsLink }>OpenWebinars</ExternalLink>
      </p>
    </section>
  }
}

// Export the class
export default BaseComponent;
