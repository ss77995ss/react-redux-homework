import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { mockData } from '../data/mockData';
import TableContainer, { mapDispatchToProps } from '../../src/client/containers/tableContainer';

const mockStore = configureMockStore();

describe('./tableContainer', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    const initialState = {
      table: mockData,
      readFilter: 'dfasf',
    };
    store = mockStore(initialState);
    wrapper = shallow(<TableContainer store={store} />);
  });

  describe('When table is created', () => {
    it('should have props', () => {
      expect(wrapper.prop('tableData')).toHaveLength(mockData.length);
      expect(wrapper.prop('filterText')).toBe('dfasf');
    });
  });

  describe('When cell data is changed', () => {
    it('should call updateCell function after onChange event', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).getTableData();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
