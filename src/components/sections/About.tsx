import Section from "../layout/Section";

export default function About() {
    return (
        <Section
            id="about"
            eyebrow="Character Sheet"
            title="About Me"
            subtitle="A developer mentor with a practical full-stack background and a weakness for travel, tooling, and tasteful pixels."
        >
            <div className="max-w-3xl space-y-5 text-slate-300">
                <p>
                    I am a full-stack software development mentor with a strong background in Python, Django, Flask,
                    JavaScript, HTML, CSS, and SQL.
                </p>

                <p>
                    My work focuses on helping developers build practical, maintainable projects while improving their
                    debugging, documentation, testing, and deployment skills.
                </p>

                <p>
                    Outside of code, I am a frequent traveller with a love for gaming, retro interfaces, and carefully
                    balanced creative details that make digital experiences memorable without getting in the way.
                </p>
            </div>
        </Section>
    );
}
