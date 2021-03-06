import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../src/client/components/tableRow';
import { odd, even } from '../data/mockData';

describe('WHEN odd Row is created', () => {
  const wrapper = shallow(<TableRow
    index={odd.index}
    row={odd}
  />);

  it('should have seven cells', () => {
    expect(wrapper.find('td')).toHaveLength(2);
  });

  it('should have className "table__row table__row--odd"', () => {
    expect(wrapper.find('tr').hasClass('table__row table__row--odd')).toBeTruthy();
  });
});

describe('wehn even Row is created', () => {
  const wrapper = shallow(<TableRow
    index={even.index}
    row={even}
  />);

  it('should have seven cells', () => {
    expect(wrapper.find('td')).toHaveLength(2);
  });

  it('should have className "table__row table__row--even"', () => {
    expect(wrapper.find('tr').hasClass('table__row table__row--even')).toBeTruthy();
  });
});
