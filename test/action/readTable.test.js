import React from 'react';
import { shallow } from 'enzyme';
import { mockSearch } from '../data/mockData';
import ReadTable from '../../src/client/action/readTable';

describe('<ReadTable />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<ReadTable onSubmit={mockFunc} />);

  describe('WHEN users connect to the website', () => {
    it('should have inputs', () => {
      expect(wrapper.find('input')).toHaveLength(4);
    });
  });

  describe('GIVEN ReadTable style', () => {
    describe('WHEN read button is clicked', () => {
      it('should change style', () => {
        expect(wrapper.find('.read__row').prop('style')).toHaveProperty('display', 'none');
        wrapper.setProps({isClicked: true});
        expect(wrapper.find('.read__row').prop('style')).toHaveProperty('display', 'block');
      });
    });
  });

  describe('WHEN input changed', () => {
    it('should change state value', () => {
      wrapper.instance().handleInputChange(mockSearch);
      expect(wrapper.state('key')).toBe('seq');
    });
  });

  describe('WHEN submit is clicked', () => {
    it('should call handleSubmit', () => {
      wrapper.find('form').simulate('submit', { preventDefault() {}});
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});