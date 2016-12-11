import React, { PropTypes } from 'react';

/**
 * Recibe una fecha y la muestra correctamente en la UI
 */
class FormattedDate extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    date: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired
  };

  // Obtenemos un objeto date válido
  get parsedDate() {
    let date = new Date(),
      time = typeof this.props.date === 'string' ?
             Date.parse(this.props.date) :
             this.props.date;
    // Forzamos la fecha correcta
    date.setTime(time);
    return date;
  }

  // Agrega un 0 a la izquierda si el número es menor de 10.
  padNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  // Formateamos correctamente la fecha
  get formatDate() {
    let date = this.parsedDate;
    return `${this.padNumber(date.getDate())}-${this.padNumber(date.getMonth() + 1)}`+
           `-${this.padNumber(date.getFullYear())}`;
  }

  /**
   * Render the Date component
   */
  render() {
    return <date>{ this.formatDate }</date>;
  }
}

// Export the class
export default FormattedDate;
