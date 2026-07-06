import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
    projects: Project[];
    onTechClick?: (technology: string) => void;
};

export default function ProjectGrid({ projects, onTechClick }: ProjectGridProps) {
    if (projects.length === 0) {
        return (
            <p className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-slate-300">
                No projects match this filter yet.
            </p>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onTechClick={onTechClick} />
            ))}
        </div>
    );
}
