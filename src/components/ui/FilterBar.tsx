import TechChip from "./TechChip";

type FilterBarProps = {
    technologies: string[];
    activeTechnology: string;
    onTechnologyChange: (technology: string) => void;
};

export default function FilterBar({ technologies, activeTechnology, onTechnologyChange }: FilterBarProps) {
    return (
        <div className="mb-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
                <TechChip
                    key={technology}
                    label={technology}
                    active={activeTechnology === technology}
                    onClick={() => onTechnologyChange(technology)}
                />
            ))}
        </div>
    );
}
