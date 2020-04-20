export const studyListActionTypes = {
  get: 'get',
  set: 'set',
};

export const initialStudiesState = {
  isFetching: false,
  data: null,
};

export const studyListReducer = (state = initialStudiesState, { type, payload }) => {
  switch (type) {
    case studyListActionTypes.get: {
      return { ...state, isFetching: true };
    }
    case studyListActionTypes.set: {
      return { ...state, isFetching: false, data: payload.data };
    }
    default:
      return state;
  }
};
