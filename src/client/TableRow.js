import React from 'react';
import PropTypes from 'prop-types';

class TableRow extends React.Component{
  render(){
    const isEven = (this.props.index % 2 === 0);
    const className = isEven ? 'table__row table__row--even' : 'table__row table__row--odd';
    return (
      <tr className={className}>
        <td>{this.props.seq}</td>
        <td>{this.props.status}</td>
        <td>{this.props.category}</td>
        <td>{this.props.title}</td>
        <td>{this.props.owner}</td>
        <td>{this.props.priority}</td>
      </tr>
    );
  };
}

TableRow.propTypes = {
  index: PropTypes.number,
  seq: PropTypes.number,
  status: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  owner: PropTypes.string,
  priority: PropTypes.string
};

export default TableRow;