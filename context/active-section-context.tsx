"use client";

import { useState, createContext, useContext } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import type { SectionName } from "@/libs/types";

type ActiveSectionContextProviderProps = {
    children: ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    );
};

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if (context === null)
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");

    return context;
};
