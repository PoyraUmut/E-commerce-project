const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  rolesFetchState: "NOT_FETCHED",
  theme: "",
  language: "",
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

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
