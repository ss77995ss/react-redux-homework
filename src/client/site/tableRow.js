import React from 'react';
import PropTypes from 'prop-types';
import { rowPropType, updatePropType } from '../data/shape';
import Delete from '../action/delete';
import Update from '../action/update';

function TableRow (props){
  const { index, row, updatedStyle, onDelete, onUpdate } = props;
  const isEven = (index % 2 === 0);
  const className = isEven ? 'table__row table__row--even' : 'table__row table__row--odd';
  const rowStyle = (updatedStyle.seq === row.seq) ? updatedStyle.color : '';
  const target = {
    seq: row.seq
  };

  return (
    <tr className={className} style={{backgroundColor: rowStyle}}>
      <td>{row.seq}</td>
      <td>{row.status}</td>
      <td>{row.category}</td>
      <td>{row.title}</td>
      <td>{row.owner}</td>
      <td>{row.priority}</td>
      <td>
        <Delete target={target} onDelete={onDelete} />
        <Update target={target} onUpdate={onUpdate} />
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  index: PropTypes.number,
  row: rowPropType,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  updatedStyle: updatePropType
};

TableRow.defaultProps = {
  index: 0,
  row: {},
  onDelete: () => {},
  onUpdate: () => {},
  updatedStyle: {}
};

export default TableRow;