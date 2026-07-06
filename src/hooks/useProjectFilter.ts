import { useMemo, useState } from "react";
import type { Project } from "../types/project";
import { filterProjectsByTechnology, getAllTechnologies } from "../utils/filters";

const ALL_TECHNOLOGIES = "All";

export function useProjectFilter(projects: Project[]) {
    const [activeTechnology, setActiveTechnology] = useState<string>(ALL_TECHNOLOGIES);

    const technologies = useMemo(() => getAllTechnologies(projects), [projects]);

    const filteredProjects = useMemo(
        () => filterProjectsByTechnology(projects, activeTechnology),
        [projects, activeTechnology],
    );

    function handleTechnologyChange(technology: string) {
        setActiveTechnology((currentTechnology) => (currentTechnology === technology ? ALL_TECHNOLOGIES : technology));
    }

    function resetTechnologyFilter() {
        setActiveTechnology(ALL_TECHNOLOGIES);
    }

    return {
        activeTechnology,
        technologies,
        filteredProjects,
        handleTechnologyChange,
        resetTechnologyFilter,
    };
}
