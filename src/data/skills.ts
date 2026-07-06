import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
    {
        id: "backend",
        title: "Backend",
        skills: ["Python", "Django", "Flask"],
    },
    {
        id: "frontend",
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    },
    {
        id: "database",
        title: "Database",
        skills: ["SQL", "PostgreSQL", "MySQL", "SQLite"],
    },
    {
        id: "tools",
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Docker"],
    },
    {
        id: "learning-next",
        title: "Learning Next",
        skills: ["Next.js", "Firebase", "LLMs", "LangChain", "LangGraph"],
    },
];
