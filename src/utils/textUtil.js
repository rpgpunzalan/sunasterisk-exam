import { unescape } from "lodash";

export const formatText = (text) => {
  return unescape(text);
};
