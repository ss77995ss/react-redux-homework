import { connect } from 'react-redux';
import { rowDeleter } from '../actions';
import DeleteBtn from '../components/deleteBtn';

const mapStateToProps = () => ({
  url: '/api/tabledatas',
});

export const mapDispatchToProps = dispatch => ({
  onClick: (url, targetRow) => {
    dispatch(rowDeleter(url, targetRow));
  },
});

const DeleteBtnContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteBtn);

export default DeleteBtnContainer;
