import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Table from '../components/table';

const mapStateToProps = state => ({
  tableData: state.table,
  filterText: state.readFilter,
  url: '/api/tabledatas',
});

export const mapDispatchToProps = dispatch => ({
  getTableData: (url) => {
    dispatch(fetchData(url));
  },
});

const tableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);

export default tableContainer;
