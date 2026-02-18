import api from "../../api/axios";


export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setCategoriesFetchState = (state) => ({
  type: "SET_CATEGORIES_FETCH_STATE",
  payload: state,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(setCategoriesFetchState("FETCHING"));

    const response = await api.get("/categories");

    dispatch(setCategories(response.data));
    dispatch(setCategoriesFetchState("FETCHED"));
  } catch (error) {
    dispatch(setCategoriesFetchState("FAILED"));
  }
};


export const setProductList = (productList) => ({
  type: "SET_PRODUCT_LIST",
  payload: productList,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total,
});

export const setFetchState = (state) => ({
  type: "SET_FETCH_STATE",
  payload: state,
});

export const setLimit = (limit) => ({
  type: "SET_LIMIT",
  payload: limit,
});

export const setOffset = (offset) => ({
  type: "SET_OFFSET",
  payload: offset,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});


export const fetchProducts =
  (extraParams = "") =>
  async (dispatch, getState) => {
    try {
      dispatch(setFetchState("FETCHING"));

      const { limit, offset, filter } = getState().product;

      let query = `/products?limit=${limit}&offset=${offset}`;

      if (filter) {
        query += `&filter=${filter}`;
      }

      if (extraParams) {
        query += extraParams;
      }

      const response = await api.get(query);

      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      dispatch(setFetchState("FAILED"));
    }
  };

export const setProduct = (product) => ({
  type: "SET_PRODUCT",
  payload: product,
});

export const fetchProduct = (productId) => async (dispatch) => {
  try {
    dispatch(setFetchState("FETCHING"));
    const response = await api.get(`/products/${productId}`);
    dispatch(setProduct(response.data));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
  }
};
