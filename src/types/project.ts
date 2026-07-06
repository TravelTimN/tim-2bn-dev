import type { Technology } from "./technology";

export type ProjectType =
    | "Client Project"
    | "Internal Tool"
    | "Learning Project"
    | "Automation Tool"
    | "Personal Project";

export type ProjectLink = {
    label: string;
    url: string;
};

export type Project = {
    id: string;
    title: string;
    type: ProjectType;
    featured: boolean;
    description: string;
    technologies: Technology[];
    links: ProjectLink[];
};
