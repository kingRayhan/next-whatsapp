import { createSlice } from "@reduxjs/toolkit";

const chatRoomSlice = createSlice({
  name: "chat-rooms",
  initialState: {
    rooms: [
      {
        id: "1",
        perticipants: [],
      },
    ],
  },
  reducers: {},
});
