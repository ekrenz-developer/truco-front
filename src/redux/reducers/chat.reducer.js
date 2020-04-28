import { OPEN_CHAT, CLOSE_CHAT } from '../../consts/actionTypes';

const initialState = {
  isChatOpen: false
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CHAT:
      return { 
        ...state, 
        ...action.payload 
      };
      break;
    case CLOSE_CHAT:
      return { 
        ...state, 
        ...action.payload
      };
      break;
    default:
      return { ...state };
  } 
}

export default chat;