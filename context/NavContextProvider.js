"use client";

import React, { useState } from "react";
import { NavContext } from "./NavContext";

const NavContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContext.Provider value={[isOpen, toggleNav]}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
