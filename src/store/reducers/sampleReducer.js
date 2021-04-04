import { sampleTypes } from "../types";

const initialState = {
  text: "",
};

const sampleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case sampleTypes.SAMPLE:
      return { ...state, text: payload.text };
    default:
      return state;
  }
};

export default sampleReducer;
