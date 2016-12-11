import React from 'react';

// Importamos los estilos
import './Header.css';

/**
 * Muestra el header de nuestra aplicación. No necesitamos que se actualice por
 * dejamos shouldComponenteUpdate nunca retornará true.
 */
class Header extends React.Component {
  /**
   * Al ser contenido estático, no necesitamos actualizar este componente.
   */
  shouldComponenteUpdate() {
    return false;
  }

  /**
   * Render the Header component
   */
  render() {
    return <header className="Header">
      <h1>Github Releases</h1>
    </header>
  }
}

// Export the class
export default Header;
