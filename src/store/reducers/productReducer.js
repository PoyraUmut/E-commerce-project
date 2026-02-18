const initialState = {
  categories: [],
  categoriesFetchState: "NOT_FETCHED",

  productList: [],
  total: 0,

  limit: 12,
  offset: 0,
  filter: "",
  product: null,
  fetchState: "NOT_FETCHED",
};



export const productReducer = (state = initialState, action) => {
  switch (action.type) {


    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SET_CATEGORIES_FETCH_STATE":
      return { ...state, categoriesFetchState: action.payload };


    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };

    case "SET_TOTAL":
      return { ...state, total: action.payload };

    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };

    case "SET_LIMIT":
      return { ...state, limit: action.payload };

    case "SET_OFFSET":
      return { ...state, offset: action.payload };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    case "SET_PRODUCT":
      return { ...state, product: action.payload };

    default:
      return state;
  }
};

