import api from "../../api/axios";

/* ========================
   BASIC ACTIONS
======================== */

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

export const setLoginFetchState = (state) => ({
  type: "SET_LOGIN_FETCH_STATE",
  payload: state,
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const setRolesFetchState = (state) => ({
  type: "SET_ROLES_FETCH_STATE",
  payload: state,
});

/* ========================
   ROLES FETCH
======================== */

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles, rolesFetchState } = getState().client;

    if (roles.length > 0 || rolesFetchState === "FETCHING") {
      return;
    }

    try {
      dispatch(setRolesFetchState("FETCHING"));

      const response = await api.get("/roles");

      dispatch(setRoles(response.data));
      dispatch(setRolesFetchState("FETCHED"));
    } catch (error) {
      dispatch(setRolesFetchState("FAILED"));
      console.error("Roles fetch failed:", error);
    }
  };
};

export const loginUser =
  (formData, rememberMe) =>
  async (dispatch) => {

    dispatch(setLoginFetchState("FETCHING"));

    try {
      const response = await api.post("/login", formData);

      const { token, name, email, role_id } = response.data;

      dispatch(setUser({ name, email, role_id }));
      dispatch(setToken(token));
      dispatch(setLoginFetchState("SUCCESS"));

      if (rememberMe) {
        localStorage.setItem("token", token);
      }

      return true; 
    } catch (error) {
      dispatch(setLoginFetchState("FAILED"));
      return false;
    }
  };


