import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import TableCellContainer, { mapDispatchToProps } from '../../src/client/containers/tableCellContainer';

const mockStore = configureMockStore();

describe('./tableCellContainer', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    const initialState = {
      url: '/api/tabledatas',
    };
    store = mockStore(initialState);
    wrapper = shallow(<TableCellContainer store={store} cellData={{}} />);
  });
  describe('When button is created', () => {
    it('should have url ready to send', () => {
      expect(wrapper.prop('url')).toBe('/api/tabledatas');
    });
  });
  describe('When cell data is changed', () => {
    it('should call updateCell function after onChange event', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onChange();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
