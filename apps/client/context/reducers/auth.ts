import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  SET_AUTH_TOKEN,
  SET_USER,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';

const auth = (state, { payload, type }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true,
        },
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          user: payload,
        },
      };

    case SET_AUTH_TOKEN:
      return {
        ...state,
        auth: {
          ...state.auth,
          token: payload,
        },
      };
    case SET_USER:
      return {
        ...state,
        auth: {
          ...state.auth,
          user: JSON.parse(localStorage.getItem('user')),
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default auth;
