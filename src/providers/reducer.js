export const actions = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_USER: 'SET_USER'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actions.SET_USER:
      return { ...state, user: action.payload };
  }
};
