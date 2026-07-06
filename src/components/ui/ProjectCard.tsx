import { motion } from "motion/react";
import type { Project } from "../../types";
import Button from "./Button";
import TechChip from "./TechChip";

type ProjectCardProps = {
    project: Project;
    onTechClick?: (technology: string) => void;
};

export default function ProjectCard({ project, onTechClick }: ProjectCardProps) {
    return (
        <motion.article
            className="flex h-full flex-col rounded-xl border border-slate-700 bg-slate-800 p-6"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
        >
            <p className="mb-2 text-sm font-semibold text-cyan-400">{project.type}</p>

            <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

            <p className="mb-5 grow text-slate-300">{project.description}</p>

            <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <TechChip key={tech} label={tech} onClick={onTechClick ? () => onTechClick(tech) : undefined} />
                ))}
            </div>

            {project.links.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-3">
                    {project.links.map((link) => (
                        <Button key={link.url} href={link.url} variant="secondary" target="_blank" rel="noreferrer">
                            {link.label}
                        </Button>
                    ))}
                </div>
            )}
        </motion.article>
    );
}
