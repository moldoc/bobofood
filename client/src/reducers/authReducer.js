import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      // Return user model or false.
      return action.payload || false;
    default:
      return state;
  }
}
