import { sampleTypes } from "../types";

const initialState = {
  text: "",
};

const sampleReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case sampleTypes.SAMPLE:
      return { ...state, text: data.text };
    default:
      return state;
  }
};

export default sampleReducer;
