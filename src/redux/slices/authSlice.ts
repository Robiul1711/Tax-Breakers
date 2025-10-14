import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItem, setItem, removeItem } from "@/lib/localStorage";
import { persistStore } from "redux-persist";



export interface User {
  id: number;
  name: string;
  email: string;
  is_premium: boolean;
  avatar: string | null;
  agree_to_terms: boolean;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: typeof window !== "undefined" ? getItem("token") || null : null,
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      setItem("token", action.payload.token);
    },

    logout: state => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;

      // Remove manually set localStorage item
      removeItem("token");

      // Clear redux-persist stored state
      if (typeof window !== "undefined") {
        localStorage.removeItem("persist:auth");
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
