const FETCH_PIZZA = 'FETCH_PIZZA';
const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';

const initialState = {
  items: [],
  cartItems: [],
  isLoaded: false,
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PIZZA:
      return { ...state, items: action.payload };
    case ADD_PIZZA_TO_CART:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};

export const fetchPizzaActionCreator = (payload) => ({ type: FETCH_PIZZA, payload });
export const addPizzaActionCreator = (payload) => ({ type: ADD_PIZZA_TO_CART, payload });

// const res = await axios.get('https://60f2ed746d44f3001778880a.mockapi.io/pizza');
//   console.log(res.data);
