import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

  it('Should render the header of the page', () => {
    const header = shallow(
      <Header />
    );

    expect(header.text()).toEqual('Github Releases');
  });
});
