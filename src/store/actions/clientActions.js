import api from "../../api/axios";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
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

