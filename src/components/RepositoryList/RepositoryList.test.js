import React from 'react';
import { shallow } from 'enzyme';
import RepositoryList from './RepositoryList';

describe('RepositoryList', () => {

  it('Should render a loading message', () => {
    const repositoryList = shallow(
      <RepositoryList data={ [] } total={ 0 } loading={ true } search={ 'test' }
        queried={ false }/>
    );

    // expect(repositoryList.find('HintMessage').length).toEqual(1);
  });
});
