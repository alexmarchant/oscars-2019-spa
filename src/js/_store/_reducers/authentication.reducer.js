import { authConstants } from '../_constants';
import nomineesData from '../../../data/nominees'

const initialState = {
  user: null,
  error: null,
  loading:false
}

export const authentication = (state = initialState, action ) => {

  switch(action.type) {

    case authConstants.AUTH_START:
    return {
      ...state,
      error: null,
      loading: true
    };

    case authConstants.AUTH_SUCCESS:
    return {
      ...state,
      user: action.user,
      error: null,
      loading: false
    };

    case authConstants.AUTH_FAIL:
    return {
      ...state,
      error: action.error,
      loading: false
    };

    case authConstants.IS_AUTHENTICATED:
    return {
      ...state,
      user: action.user
    };

    case authConstants.AUTH_LOGOUT:
    return {
      ...state,
      user: null
    };

    default:
      return state;
  }
};
