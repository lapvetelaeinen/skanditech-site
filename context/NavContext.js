"use client";

import { createContext, useContext } from "react";

export const NavContext = createContext({
  isOpen: false,
  toggleNav() {},
});

export const useNavContext = () => useContext(NavContext);
