import React, { PropTypes } from 'react';

// Importamos los componentes
import Header from '../../components/Header';
import SearchContainer from '../SearchContainer';

/**
 * Este es el container base de nuestra aplicación. Si recibe un elemento en
 * props.children, renderizará dicho elemento en la UI. Si este prop es
 * `undefined`, renderizará la vista para buscar nuevos repositorios.
 */
class BaseContainer extends React.Component {
  /**
   * Props del component
   */
  static propTypes = {
    example: PropTypes.object
  };

  /**
   * Render the HomeContainer component
   */
  render() {
    return <main className="container">
      <Header />
      { this.props.children || <SearchContainer /> }
    </main>;
  }
}

// Export the class
export default BaseContainer;
