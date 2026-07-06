import { journeyItems } from "../../data/journey";
import Section from "../layout/Section";

export default function Journey() {
    return (
        <Section
            id="journey"
            eyebrow="Journey Map"
            title="Developer Journey"
            subtitle="The path so far: mentoring, tooling, backend development, and modern frontend growth."
        >
            <div className="space-y-6">
                {journeyItems.map((item, index) => (
                    <article key={item.id} className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                        <p className="mb-2 text-sm font-semibold text-cyan-400">Step {index + 1}</p>

                        <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                        <p className="text-slate-300">{item.description}</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
