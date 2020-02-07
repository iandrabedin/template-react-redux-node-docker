import { actionsEnum } from "../actions/actionsEnum";

const initialState = {
  title: "Hello world"
};

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsEnum.EXAMPLE_REQUEST:
      return { ...state };
    case actionsEnum.EXAMPLE_FAILURE:
      return { ...state };
    case actionsEnum.EXAMPLE_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
