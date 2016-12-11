import React, { PropTypes } from 'react';

// Componentes
import { Link } from 'react-router';

/**
 * Renderiza la información relativa a un repositorio
 */
class RepositoryRow extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    repo: PropTypes.object.isRequired
  }

  /**
   * Render the RepositoryRow component
   */
  render() {
    let repo = this.props.repo;

    return <tr>
      <td>{ repo.full_name }</td>
      <td>{ repo.stargazers_count }</td>
      <td>
        <Link to={ `/${repo.fullname}`}>Releases</Link>
      </td>
    </tr>
  }
}

// Export the class
export default RepositoryRow;
