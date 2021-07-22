import axios from 'axios';
import { fetchPizzaActionCreator } from '../reducers/pizzaReducer';
export const fetchPizza = () => async (dispatch) => {
  const res = await axios.get('https://60f2ed746d44f3001778880a.mockapi.io/pizza');
  dispatch(fetchPizzaActionCreator(res.data));
};

// const res = axios.get('https://60f2ed746d44f3001778880a.mockapi.io/pizza');
