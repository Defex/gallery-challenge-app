export const filtersActionTypes = {
  setActiveFilter: 'setActiveFilter',
};

export const initialStateFilterState = {
  items: [],
  filters: [],
  activeFilter: 'all',
  filterKey: undefined,
  filteredItems: [],
};

export const getInitialFilterState = ({ items, activeFilter, filterKey }) => {
  const filters = items.reduce((acc, v) => (acc.includes(v[filterKey]) ? acc : [...acc, v[filterKey]]), ['all']);
  const filteredItems = items.filter(data => (activeFilter === 'all' ? true : data[filterKey] === activeFilter));
  return {
    items,
    filters,
    activeFilter,
    filterKey,
    filteredItems,
  };
};

export const filtersReducer = (state = initialStateFilterState, { type, payload }) => {
  switch (type) {
    case filtersActionTypes.setActiveFilter: {
      const { items, filterKey } = state;
      const { activeFilter } = payload;

      return {
        ...state,
        filteredItems: items.filter(data => (activeFilter === 'all' ? true : data[filterKey] === activeFilter)),
        activeFilter,
      };
    }
    default:
      return state;
  }
};
