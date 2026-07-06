type SectionHeadingProps = {
    title: string;
    eyebrow?: string;
    subtitle?: string;
};

export default function SectionHeading({ title, eyebrow, subtitle }: SectionHeadingProps) {
    return (
        <div className="mb-10">
            {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">{eyebrow}</p>}

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>

            {subtitle && <p className="mt-4 max-w-2xl text-slate-300">{subtitle}</p>}
        </div>
    );
}
