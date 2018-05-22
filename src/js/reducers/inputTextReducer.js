import { INPUT_ONCHANGE } from "../constants/action-types";

const textReducer = (content='', action) => {
  switch(action.type) {
    case INPUT_ONCHANGE:
      return content
  }
}

export default textReducer;