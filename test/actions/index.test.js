import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockCreateAction } from '../data/mockData';
import {
  ROW_CREATER,
  ROW_DELETER,
  CELL_UPDATER,
  FILTER_TEXT,
} from '../constants/actionTypes';
import * as actions from '../../src/client/actions/index';
import { FETCH_DATA } from '../../src/client/constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('./actions', () => {
  const url = '/api/tabledatas';
  const store = mockStore({ data: {} });
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });
  afterEach(() => {
    mock.restore();
    store.clearActions();
  });

  describe('When rowCreater action is called', () => {
    it('should create an action to create new row', () => {
      const expectedAction = [{
        type: ROW_CREATER,
        data: mockCreateAction,
      }];

      mock.onPost(url).reply(200, {
        mockCreateAction,
      });
      return store.dispatch(actions.rowCreater(url, mockCreateAction))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
  });
  describe('When filterText action is called', () => {
    it('should create an action to read throw the table', () => {
      const mockData = 'afasfdssda';
      const expectedAction = {
        type: FILTER_TEXT,
        text: mockData,
      };
      expect(actions.filterText(mockData)).toEqual(expectedAction);
    });
  });
  describe('When rowDeleter action is called', () => {
    it('should create an action to delete a row', () => {
      const mockData = mockCreateAction;
      const expectedAction = [{
        type: ROW_DELETER,
        data: mockData,
      }];

      mock.onDelete(url).reply(200, {
        data: mockData,
      });
      return store.dispatch(actions.rowDeleter(url, mockData))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
  });
  describe('When cellUpdater action is called', () => {
    it('should create an action to change data of a cell', () => {
      const mockData = mockCreateAction;
      const expectedAction = [{
        type: CELL_UPDATER,
        data: mockData,
      }];

      mock.onPut(url).reply(200, {
        mockData,
      });
      return store.dispatch(actions.cellUpdater(url, mockData))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
  });
  describe('When fetchData action is called', () => {
    it('should create an action to get data from database', () => {
      const mockData = mockCreateAction;
      const expectedAction = [{
        type: FETCH_DATA,
        data: { mockData },
      }];

      mock.onGet(url).reply(200, {
        mockData,
      });
      return store.dispatch(actions.fetchData(url))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
  });
});
