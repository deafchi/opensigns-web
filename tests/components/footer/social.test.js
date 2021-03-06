import React from 'react';

import FooterSocial from '../../../src/components/footer/social';

describe('<FooterSocial />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterSocial />);
  });

  it('renders element', () => {
    expect(wrapper.find('a')).to.have.lengthOf(3);
  });
});
