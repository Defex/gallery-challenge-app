import Fuse from 'fuse.js';
import { fuseOptions } from '../config';

export const searchActionTypes = {
  setSearchValue: 'setSearchValue',
  setItems: 'setItems',
};

export const initialSearchState = {
  searchValue: '',
  items: [],
  filteredItems: [],
};

const getFilteredItems = (items, query) => {
  if (query) {
    return new Fuse(items, fuseOptions).search(query);
  }
  return items;
};

export const getSearchInitialState = (items, searchValue) => ({
  ...initialSearchState,
  items,
  searchValue,
  filteredItems: getFilteredItems(items, searchValue),
});

export const searchReducer = (state = initialSearchState, { type, payload }) => {
  switch (type) {
    case searchActionTypes.setSearchValue: {
      const filteredItems = getFilteredItems(state.items, payload.searchValue);
      return { ...state, filteredItems, searchValue: payload.searchValue };
    }
    case searchActionTypes.setItems: {
      const filteredItems = getFilteredItems(payload.items, state.searchValue);
      return { ...state, items: payload.items, filteredItems };
    }
    default:
      return state;
  }
};
