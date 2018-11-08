import { connect } from 'react-redux';
import { cellUpdater } from '../actions';
import TableCell from '../components/tableCell';

const mapStateToProps = () => ({
  url: '/api/tabledatas',
});

export const mapDispatchToProps = dispatch => ({
  onChange: (url, targetCell) => {
    dispatch(cellUpdater(url, targetCell));
  },
});

const tableCellContainer = connect(mapStateToProps, mapDispatchToProps)(TableCell);

export default tableCellContainer;
