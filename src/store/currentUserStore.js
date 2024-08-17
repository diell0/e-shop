import { create } from "zustand";

const currentUserStore = create((set) => ({
  email: "",
  userId: "",
  fullName: "",
  isAdmin: false,

  setUser: ({ email, userId, fullName, role }) =>
    set({ email, userId, fullName, isAdmin: role === "Admin" }),
}));

export default currentUserStore;
