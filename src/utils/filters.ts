import type { Project } from "../types/project";

export function getFeaturedProjects(projects: Project[]): Project[] {
    return projects.filter((project) => project.featured);
}

export function filterProjectsByTechnology(projects: Project[], technology: string): Project[] {
    if (technology === "All") {
        return projects;
    }

    return projects.filter((project) => project.technologies.includes(technology));
}

export function getAllTechnologies(projects: Project[]): string[] {
    const technologies = projects.flatMap((project) => project.technologies);

    return ["All", ...new Set(technologies)].sort();
}
