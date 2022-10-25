import { ACTIONS } from "./Actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CONTACT:
      return { ...state.contactInfo, contactInfo: [action.data] };
    case ACTIONS.DELETE_CONTACT:
      const updatedContact = state.contactInfo.filter(
        (i) => i.id !== action.id
      );
      return { ...state.contactInfo, contactInfo: updatedContact };
    default:
      return state;
  }
};
