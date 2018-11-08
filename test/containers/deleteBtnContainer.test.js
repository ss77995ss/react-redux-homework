import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import DeleteBtnContainer, { mapDispatchToProps } from '../../src/client/containers/deleteBtnContainer';

const mockStore = configureMockStore();

describe('./deleteBtnContainer', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    const initialState = {
      url: '/api/tabledatas',
    };
    store = mockStore(initialState);
    wrapper = shallow(<DeleteBtnContainer store={store} target={{}} />);
  });
  describe('When button is created', () => {
    it('should have url ready to send', () => {
      expect(wrapper.prop('url')).toBe('/api/tabledatas');
    });
  });
  describe('When delete buntton is clicked', () => {
    it('should call deleteRow function after onClick event', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onClick();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
