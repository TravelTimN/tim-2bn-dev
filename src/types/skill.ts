export type SkillCategory = "Backend" | "Frontend" | "Database" | "Tools" | "Learning Next";

export type SkillGroup = {
    id: string;
    title: SkillCategory;
    skills: string[];
};
