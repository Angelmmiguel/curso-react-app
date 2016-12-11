import React, { PropTypes } from 'react';

/**
 * Muestra un link que se abrirá en una nueva página
 */
class ExternalLink extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.element
    ]).isRequired
  };

  /**
   * Renderizamos el link
   */
  render() {
    return <a href={ this.props.to } rel="noopener" target="_blank">
      { this.props.children }
    </a>;
  }
}

// Export the class
export default ExternalLink;
