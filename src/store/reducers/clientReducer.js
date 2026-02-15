const initialState = {
  roles: [],
  rolesFetchState: "NOT_FETCHED",

  user: null,
  token: null,
  loginFetchState: "NOT_FETCHED",

  theme: null,
  language: null,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_TOKEN":
      return { ...state, token: action.payload };

    case "SET_LOGIN_FETCH_STATE":
      return { ...state, loginFetchState: action.payload };

    case "SET_ROLES":
      return { ...state, roles: action.payload };

    case "SET_ROLES_FETCH_STATE":
      return { ...state, rolesFetchState: action.payload };

    case "SET_THEME":
      return { ...state, theme: action.payload };

    case "SET_LANGUAGE":
      return { ...state, language: action.payload };

    default:
      return state;
  }
};
