import { INPUT_ONCHANGE } from "../constants/action-types";

const inputTextReducer = (content='', action) => {
  switch(action.type) {
    case INPUT_ONCHANGE:
      return content
  }
}

export default inputTextReducer;