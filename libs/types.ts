export type SectionName = "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact";

export type HeaderLink = {
    name: SectionName,
    hash: string,
}

export type Project = {
    title: string,
    description: string,
    tags: string[],
    imageUrl: any,
};