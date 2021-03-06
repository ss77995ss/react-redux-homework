import React from 'react';
import PropTypes from 'prop-types';
import { cellPropType } from '../types/shape';

class TableCell extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange, url } = this.props;
    const target = {
      id: e.target.id,
      name: e.target.name,
      value: e.target.value,
    };
    onChange(url, target);
  }

  render() {
    const { cellData } = this.props;
    return (
      <td>
        <input
          type="text"
          id={cellData.id}
          name={cellData.name}
          value={cellData.value}
          onChange={this.handleChange}
        />
      </td>
    );
  }
}

TableCell.propTypes = {
  url: PropTypes.string.isRequired,
  cellData: cellPropType.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TableCell;
