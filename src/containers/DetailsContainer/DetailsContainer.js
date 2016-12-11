import React, { PropTypes } from 'react';

/**
 * Este container muestra los detalles para un repo concreto. Se renderiza cuando
 * un usuario accede a /:user/:repo. En el veremos la lista de releases con
 * los detalles de cada una de ellas.
 */
class DetailsContainer extends React.Component {
  /**
   * Props del component
   */
  static propTypes = {
    example: PropTypes.object
  };

  /**
   * UI del contenedor
   */
  render() {
    return (
      <h1>DetailsContainer!</h1>
    );
  }
}

// Export the class
export default DetailsContainer;
