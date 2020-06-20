export const isChatOpen = (state) => state.chat.isChatOpen;
export const tablesResult = (state) => state.room.tables;
export const isTablesLoading = (state) => state.room.isLoading;
export const roomsResult = (state) => state.room.rooms;
export const isRoomsLoading = (state) => state.room.isRoomsLoading;
export const isRandomRoomLoadingSelector = (state) => state.room.isRandomRoomLoading;
export const randomRoomSelector = (state) => state.room.randomRoom;
export const currentRoomSelector = (state) => state.room.currentRoom;