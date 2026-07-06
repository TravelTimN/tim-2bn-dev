import Section from "../layout/Section";
import Button from "../ui/Button";

export default function Contact() {
    return (
        <Section
            id="contact"
            eyebrow="Send Signal"
            title="Contact"
            subtitle="Open to suitable developer, mentor, tooling, and full-stack opportunities."
        >
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                <p className="mb-6 max-w-2xl text-slate-300">
                    Interested in working together, discussing a role, or just saying hello? Send a signal.
                </p>

                <Button href="mailto:traveltimn@gmail.com">Email Me</Button>
            </div>
        </Section>
    );
}
