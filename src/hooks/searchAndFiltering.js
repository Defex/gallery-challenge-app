import { useEffect, useReducer, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { searchReducer, getSearchInitialState, searchActionTypes } from '../reducers/searchDuck';
import { filtersReducer, getInitialFilterState, filtersActionTypes } from '../reducers/filtersDuck';

export const useFilters = (items, filter = 'all', filterKey) => {
  const [reducer, dispatch] = useReducer(
    filtersReducer,
    getInitialFilterState({ items, activeFilter: filter, filterKey }),
  );

  const setActiveFilter = useCallback(
    newFilter =>
      dispatch({
        type: filtersActionTypes.setActiveFilter,
        payload: { activeFilter: newFilter },
      }),
    [dispatch],
  );

  return {
    reducer,
    setActiveFilter,
  };
};

export const useSearch = (defaultItems, searchValue = '') => {
  const [reducer, dispatch] = useReducer(searchReducer, getSearchInitialState(defaultItems, searchValue));

  const setSearchValue = useCallback(
    searchValue =>
      dispatch({
        type: searchActionTypes.setSearchValue,
        payload: { searchValue },
      }),
    [dispatch],
  );

  const setItems = useCallback(
    items =>
      dispatch({
        type: searchActionTypes.setItems,
        payload: { items },
      }),
    [dispatch],
  );

  return {
    reducer,
    setSearchValue,
    setItems,
  };
};

export const useFullSearch = (items, filterKey, filter = 'all', searchValue = '') => {
  const { reducer: filtersReducer, setActiveFilter } = useFilters(items, filter, filterKey);
  const { reducer: searchReducer, setItems, setSearchValue } = useSearch(filtersReducer.filteredItems, searchValue);

  useEffect(() => {
    if (searchReducer.items !== filtersReducer.filteredItems) {
      setItems(filtersReducer.filteredItems);
    }
  }, [filtersReducer, searchReducer, setItems]);

  return {
    filteredItems: searchReducer.filteredItems,
    filters: filtersReducer.filters,
    activeFilter: filtersReducer.activeFilter,
    setActiveFilter,
    searchValue: searchReducer.searchValue,
    setSearchValue,
  };
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const useQueriedSearch = items => {
  const history = useHistory();
  const query = useQuery();
  const searchQuery = query.get('searchQuery') || '';
  const statusKey = query.get('statusKey') || 'all';
  const { filteredItems, filters, activeFilter, setActiveFilter, searchValue, setSearchValue } = useFullSearch(
    items,
    'statusKey',
    statusKey,
    searchQuery,
  );

  useEffect(() => {
    if (statusKey !== activeFilter || searchQuery !== searchValue) {
      const urlQuery = new URLSearchParams('');
      urlQuery.append('statusKey', activeFilter);
      urlQuery.append('searchQuery', searchValue);
      history.push({
        path: '/',
        search: `?${urlQuery.toString()}`,
      });
    }
  }, [activeFilter, history, searchQuery, searchValue, statusKey]);

  return {
    filteredItems,
    filters,
    activeFilter,
    setActiveFilter,
    searchValue,
    setSearchValue,
  };
};
