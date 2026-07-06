import type { Project } from "../types";

export const projects: Project[] = [
    {
        id: "iraqi-kurdistan-guide",
        title: "Iraqi Kurdistan Guide",
        type: "Client Project",
        featured: true,
        description: "Production Django client project for a tourism-focused website.",
        technologies: ["Python", "Django", "JavaScript", "HTML", "CSS"],
        links: [],
    },
    {
        id: "markdown-builder",
        title: "Markdown Builder",
        type: "Internal Tool",
        featured: true,
        description: "Internal tooling for documentation generation and code validation.",
        technologies: ["Python", "Django", "JavaScript", "Bootstrap"],
        links: [],
    },
    {
        id: "minecraft-datapack-tooling",
        title: "Minecraft Datapack Tooling",
        type: "Automation Tool",
        featured: true,
        description: "Python automation for generating version-aware Minecraft datapacks.",
        technologies: ["Python", "JSON", "Automation"],
        links: [],
    },
    {
        id: "portfolio-redesign",
        title: "Portfolio Redesign",
        type: "Learning Project",
        featured: false,
        description: "This React, TypeScript, Vite, and Tailwind portfolio rebuild.",
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        links: [],
    },
];
