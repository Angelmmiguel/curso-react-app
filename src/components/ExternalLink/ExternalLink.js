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
    ]).isRequired,
    className: PropTypes.string
  };

  // Por defecto, el link no tiene ninguna clase
  static defaultProps = {
    className: ''
  }

  /**
   * Renderizamos el link
   */
  render() {
    return <a href={ this.props.to } className={ this.props.className }
      rel="noopener" target="_blank">
      { this.props.children }
    </a>;
  }
}

// Export the class
export default ExternalLink;
