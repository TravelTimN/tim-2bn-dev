import { skillGroups } from "../../data/skills";
import Section from "../layout/Section";
import SkillBadge from "../ui/SkillBadge";

export default function Skills() {
    return (
        <Section
            id="skills"
            eyebrow="Inventory"
            title="Skills"
            subtitle="Core technologies, tools, and areas currently being strengthened."
        >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((group) => (
                    <article key={group.id} className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                        <h3 className="mb-4 text-xl font-bold">{group.title}</h3>

                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <SkillBadge key={skill} label={skill} />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}
