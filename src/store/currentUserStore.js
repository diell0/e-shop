import { create } from "zustand";

const currentUserStore = create((set) => ({
  email: "",
  userId: "",
  fullName: "",
  setUser: ({ email, userId, fullName }) => set({ email, userId, fullName }),
}));

export default currentUserStore;
