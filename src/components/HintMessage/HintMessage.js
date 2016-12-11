import React, { PropTypes } from 'react';

// Estilos
import './HintMessage.css';

/**
 * Muestra un mensaje aplicandole un estilo predeterminado
 */
class HintMessage extends React.PureComponent {
  /**
   * Props del component
   */
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]).isRequired
  }

  /**
   * Render the HintMessage component
   */
  render = () => <p className="HintMessage">{ this.props.children }</p>;
}

// Export the class
export default HintMessage;
