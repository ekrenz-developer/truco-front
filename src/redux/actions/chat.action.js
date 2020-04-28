import { OPEN_CHAT, CLOSE_CHAT } from '../../consts/actionTypes';

export const openChat = payload => ({
  type: OPEN_CHAT,
  payload
});

export const closeChat = payload => ({
  type: CLOSE_CHAT,
  payload
});