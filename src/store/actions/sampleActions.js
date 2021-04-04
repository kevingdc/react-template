import { sampleTypes } from "../types";

export const setText = text => {
  return {
    type: sampleTypes.SAMPLE,
    payload: { text },
  };
};
