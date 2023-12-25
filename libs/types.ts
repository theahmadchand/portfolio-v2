import type { FunctionComponentElement } from "react";
import type { IconBaseProps } from "react-icons";

export type SectionName = "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact";

export type HeaderLink = {
    name: SectionName;
    hash: string;
};

export type Project = {
    title: string;
    description: string;
    tags: string[];
    imageUrl: any;
};

export type Experience = {
    title: string;
    location: string;
    description: string;
    icon: FunctionComponentElement<IconBaseProps>;
    date: string;
};
