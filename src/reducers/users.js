import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../apiCalls/getUser";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: [], loading: false },
  reducers: {
    addUser: (state, action) => {
      let userCount = state.value.length;
      let data = { ...action.payload, id: userCount + 1 };
      console.log(state.value);
      state.value.push(data);
    },

    deleteUser: (state, action) => {
      const users = state.value.filter((person, index) => {
        console.log(person);
        return person.id !== action.payload.id;
      });
      state.value = users;
    },

    updateUser: (state, action) => {
      const users = state.value.filter((person, index) => {
        console.log(person);
        return person.id !== action.payload.id;
      });
      state.value = [...users, action.payload];
    },
  },

  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action) => {
      console.log("Loading");
      state.loading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log(">>>>Done loading", action.payload);
      state.value = action.payload;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      console.log(">>>>Rejected", action);
      state.value = [];
    });
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
