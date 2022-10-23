import { ACTIONS } from "./Actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CONTACT:
      return { ...state.contactInfo, contactInfo: [action.data] };
    default:
      return state;
  }
};
