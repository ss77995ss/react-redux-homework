import React from 'react';
import PropTypes from 'prop-types';
import { rowPropType } from '../types/shape';
import TableRow from './tableRow';

class Table extends React.Component {
  componentDidMount() {
    const { getTableData, url } = this.props;
    getTableData(url);
  }

  render() {
    const { tableData, filterText } = this.props;
    const tableRow = tableData.map((item, index) => {
      if (item.owner.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
        const {
          _id, seq, status, category, title, owner, priority,
        } = item;
        const row = {
          id: _id,
          seq,
          status,
          category,
          title,
          owner,
          priority,
        };
        return (
          <TableRow
            key={row.seq}
            index={index + 1}
            row={row}
          />
        );
      }
      return null;
    });
    return (
      <div className="table">
        <table align="center" rules="all" className="table__main">
          <thead className="table__header">
            <tr>
              <th>seq</th>
              <th>Status</th>
              <th>Category</th>
              <th>Title</th>
              <th>Owner</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableRow}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  url: PropTypes.string.isRequired,
  tableData: PropTypes.arrayOf(rowPropType).isRequired,
  filterText: PropTypes.string.isRequired,
  getTableData: PropTypes.func.isRequired,
};

export default Table;
