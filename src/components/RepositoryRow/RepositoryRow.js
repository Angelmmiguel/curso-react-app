import React, { PropTypes } from 'react';

// Componentes
import { Link } from 'react-router';
import FaStar from 'react-icons/lib/fa/star';
import FaCodeFork from 'react-icons/lib/fa/code-fork';
import GithubAvatar from '../GithubAvatar';

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
      <td><GithubAvatar author={ repo.owner } /></td>
      <td><FaStar /> { repo.stargazers_count }</td>
      <td><FaCodeFork /> { repo.forks_count }</td>
      <td className="align-right">
        <Link className="button button-primary" to={ `/${repo.full_name}`}>Releases</Link>
      </td>
    </tr>
  }
}

// Export the class
export default RepositoryRow;
