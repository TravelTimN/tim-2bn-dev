import { projects } from "../../data/projects";
import { useProjectFilter } from "../../hooks/useProjectFilter";
import Section from "../layout/Section";
import FilterBar from "../ui/FilterBar";
import ProjectGrid from "../ui/ProjectGrid";

export default function FeaturedProjects() {
    const featuredProjects = projects.filter((project) => project.featured);

    const { activeTechnology, technologies, filteredProjects, handleTechnologyChange } =
        useProjectFilter(featuredProjects);

    return (
        <Section
            id="projects"
            eyebrow="Quest Board"
            title="Featured Projects"
            subtitle="A focused selection of production work, internal tooling, automation, and this React rebuild."
        >
            <FilterBar
                technologies={technologies}
                activeTechnology={activeTechnology}
                onTechnologyChange={handleTechnologyChange}
            />

            <ProjectGrid projects={filteredProjects} onTechClick={handleTechnologyChange} />
        </Section>
    );
}
