import axios from 'axios';
import {
  ROW_CREATER,
  ROW_DELETER,
  CELL_UPDATER,
  FILTER_TEXT,
  FETCH_DATA,
} from '../constants/actionTypes';

export const rowCreater = (url, newRow) => {
  return (dispatch) => {
    return axios.post(url, newRow)
      .then(() => {
        dispatch({
          type: ROW_CREATER,
          data: newRow,
        });
      });
  };
};

export const filterText = text => ({
  type: FILTER_TEXT,
  text,
});

export const rowDeleter = (url, row) => {
  return (dispatch) => {
    return axios.delete(url, { data: row })
      .then(() => {
        dispatch({
          type: ROW_DELETER,
          data: row,
        });
      });
  };
};

export const cellUpdater = (url, target) => {
  return (dispatch) => {
    return axios.put(url, target)
      .then(() => {
        dispatch({
          type: CELL_UPDATER,
          data: target,
        });
      });
  };
};

export const fetchData = (url) => {
  return (dispatch) => {
    return axios.get(url)
      .then((response) => {
        dispatch({
          type: FETCH_DATA,
          data: response.data,
        });
      });
  };
};
