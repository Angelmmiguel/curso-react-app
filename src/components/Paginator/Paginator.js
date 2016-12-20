import React, { PropTypes } from 'react';

// Styles
import './Paginator.css';

/*
 * Esta function nos permite incluir paginación en cualquier elemento.
 * El único requisito es que el array de datos venga en la propiedad data.
 */
export default PaginatedComponent => {

  class Paginator extends React.Component {

    static propTypes = {
      // Numero de elementos por página
      itemsPerPage: PropTypes.number,
      // Nuestros datos
      data: PropTypes.array.isRequired
    }

    // Defaults
    static defaultProps = {
      itemsPerPage: 8
    }

    constructor(props) {
      super(props);

      // Bind
      this.onClick = this.onClick.bind(this);

      this.state = {
        // Comenzamos en la página 0. Necesitamos almacenar la página actual
        page: 0
      }
    }

    /**
     * Recibimos nuevas propiedades
     */
    componentWillReceiveProps(nextProps) {
      // Tenemos que comprobar si los datos son distintos y si seguimos viéndolos
      // por pantalla. Si no, forzamos la página a 0
      let page = this.state.page;
      if (nextProps.data.length / this.props.itemsPerPage < page) {
        page = 0;
      }

      // Comprobamos si ha cambiado algo
      if (page !== this.state.page) {
        this.setState({ page });
      }
    }

    /**
     * Actualizamos la página actual.
     */
    onClick(e, page) {
      // Evitamos que el link funcione
      e.preventDefault();

      // Comprobamos si ha cambiado la página y actualizamos
      if (page !== this.state.page) {
        this.setState({ page });
      }
    }

    /**
     * Mostramos la paginación
     */
    renderPagination() {
      let numberPages = Math.ceil(this.props.data.length / this.props.itemsPerPage),
        pages = [];
      // Create links
      if (numberPages > 1){
        for(let i = 0; i < numberPages; i++) {
          // Podemos agregar elementos JSX a nuestro array. Recrodad que en
          // última instancia, son llamadas al método React.createElement
          let cssClass = "Paginator__Page";
          cssClass = i === this.state.page ? `${ cssClass } Paginator__Page--active` : cssClass;

          pages.push(
            <a href="#" className={ cssClass } key={i} onClick={(e) => this.onClick(e, i)}>
              {i + 1}
            </a>
          )
        }
      }
      // Englobamos todos los elementos en uno
      return (
        <div className="Paginator__Pagination">
          { pages }
        </div>
      )
    }

    /**
     * Obtenemos los datos que hay que mostrar
     */
    pageData() {
      let data = [];

      if (this.props.data.length > 0) {
        data = this.props.data.slice(this.state.page * this.props.itemsPerPage,
          (this.state.page + 1) * this.props.itemsPerPage);
      }

      return data;
    }

    // Renderizamos el componente con nuevos props!
    render() {
      // Creamos una copia. No podemos modificar los props originales!!
      let paginatedProps = Object.assign({}, this.props,
        { data: this.pageData() });

      return <section className="Paginator">
        <PaginatedComponent {...paginatedProps} />
        { this.renderPagination() }
      </section>;
    }
  }

  Paginator.WrappedComponent = PaginatedComponent;

  return Paginator;
}
