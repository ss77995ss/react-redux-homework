import { connect } from 'react-redux';
import { rowCreater } from '../actions';
import CreateBtn from '../components/createBtn';

const mapStateToProps = state => ({
  id: state.table.length === 0 ? 1 : state.table[state.table.length - 1].seq + 1,
  url: '/api/tabledatas',
});

export const mapDispatchToProps = dispatch => ({
  onClick: (url, newRow) => {
    dispatch(rowCreater(url, newRow));
  },
});

const CreateBtnContainer = connect(mapStateToProps, mapDispatchToProps)(CreateBtn);

export default CreateBtnContainer;
