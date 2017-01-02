import React from 'react';
import { render } from 'enzyme';
import Header from './Header';

describe('Header', () => {

  it('Should render the header of the page', () => {
    const header = render(
      <Header />
    );

    expect(header.text()).toEqual('Github Releases');
  });
});
