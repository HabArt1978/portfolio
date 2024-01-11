"use client";

import React, { createContext, useContext, useState } from "react";
import type { TSectionName } from "@/library/types";

type TActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type TActiveSectionContext = {
  activeSection: TSectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<TSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<TActiveSectionContext | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: TActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<TSectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // нам нужно следить чтобы временно отключить наблюдателя (react-intersection-observer), когда пользователь нажимает на ссылку

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
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
