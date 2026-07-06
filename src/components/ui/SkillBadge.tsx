type SkillBadgeProps = {
    label: string;
};

export default function SkillBadge({ label }: SkillBadgeProps) {
    return <span className="inline-flex rounded-full bg-slate-700 px-3 py-1 text-sm text-slate-200">{label}</span>;
}
