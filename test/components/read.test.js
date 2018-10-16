import React from 'react';
import { shallow } from 'enzyme';
import Read from '../../src/client/components/read';

describe('<Read />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Read filterText="sadfsaf" onChange={mockFunc} />);
  describe('WHEN users connect to the website', () => {
    it('should display button', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });
  });

  describe('And users type the search data', () => {
    it('should call onChange function', () => {
      const mockEvent = new Event('change');
      const customTarget = {
        value: 'dsafsfa',
      };
      Object.defineProperty(mockEvent, 'target', { writable: false, value: customTarget });
      wrapper.find('input').simulate('change', mockEvent);
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
