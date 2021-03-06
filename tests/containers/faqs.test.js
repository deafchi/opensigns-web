import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import FaqsContainer, { Faqs } from '../../src/containers/faqs';
import { a11yTypes } from '../../src/redux/modules/a11y';

describe('<Faqs />', () => {
  let wrapper;

  describe('Component', () => {
    beforeEach(() => {
      wrapper = shallow(<Faqs />);
    });

    it('renders element', () => {
      expect(wrapper.find('h2').text()).to.have.string('FAQs');
    });
  });

  describe('Container', () => {
    let mockStore;
    let store;

    beforeEach(() => {
      mockStore = configureStore([thunk]);
      store = mockStore({});
      wrapper = shallow(<FaqsContainer store={store} />);
    });

    describe('.mapDispatchToProps', () => {
      it('dispatches setA11yNavigatedMessage', () => {
        const { setA11yNavigatedMessage } = wrapper.props();
        const action = setA11yNavigatedMessage('FooBar FAQs');
        expect(action).deep.equal({
          type: a11yTypes.SET_A11Y_NAVIGATED_MESSAGE,
          message: 'FooBar FAQs',
        });
      });
    });
  });
});
