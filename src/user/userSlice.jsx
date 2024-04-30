// authenticationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserApi, loginUserApi } from "../api/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const RegisterUser = createAsyncThunk(
  "authentication/RegisterUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    const response = await fetch(createUserApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    try {
      if (response.ok) {
        const result = await response.json();
        let username = result.data.name;
        let useremail = result.data.email;
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("useremail", useremail);
        return result;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const LoginUser = createAsyncThunk(
  "authentication/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    const response = await fetch(loginUserApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    try {
      if (response.ok) {
        const result = await response.json();
        let username = result.data.name;
        let useremail = result.data.email;
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("useremail", useremail);
        return result;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "authentication",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
