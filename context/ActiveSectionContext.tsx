"use client";

import React, { createContext, useContext, useState } from "react";
import { links } from "@/library/data";

type TSectionName = (typeof links)[number]["name"];

type TActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type TActiveSectionContext = {
  activeSection: TSectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<TSectionName>>;
};

const ActiveSectionContext = createContext<TActiveSectionContext | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: TActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<TSectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext должен использоваться внутри ActiveSectionContextProvider"
    );
  }

  return context;
}
