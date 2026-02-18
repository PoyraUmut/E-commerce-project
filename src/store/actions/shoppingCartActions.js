export const setCart = (cart) => ({
  type: "SET_CART",
  payload: cart,
});

export const setPayment = (payment) => ({
  type: "SET_PAYMENT",
  payload: payment,
});

export const setAddress = (address) => ({
  type: "SET_ADDRESS",
  payload: address,
});

export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().shoppingCart;
  const existing = cart.find((item) => item.product.id === product.id);

  let newCart;
  if (existing) {
    newCart = cart.map((item) =>
      item.product.id === product.id
        ? { ...item, count: item.count + 1 }
        : item
    );
  } else {
    newCart = [...cart, { count: 1, checked: true, product }];
  }

  dispatch(setCart(newCart));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const { cart } = getState().shoppingCart;
  dispatch(setCart(cart.filter((item) => item.product.id !== productId)));
};

export const updateCount = (productId, count) => (dispatch, getState) => {
  const { cart } = getState().shoppingCart;
  if (count < 1) return;
  dispatch(setCart(cart.map((item) =>
    item.product.id === productId ? { ...item, count } : item
  )));
};

export const toggleCheck = (productId) => (dispatch, getState) => {
  const { cart } = getState().shoppingCart;
  dispatch(setCart(cart.map((item) =>
    item.product.id === productId ? { ...item, checked: !item.checked } : item
  )));
};