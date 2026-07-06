type TechChipProps = {
    label: string;
    active?: boolean;
    onClick?: () => void;
};

export default function TechChip({ label, active = false, onClick }: TechChipProps) {
    const isClickable = Boolean(onClick);

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={!isClickable}
            aria-pressed={isClickable ? active : undefined}
            className={`rounded-full px-3 py-1 text-sm transition ${
                active ? "bg-cyan-400 text-slate-950" : "bg-slate-700 text-slate-200"
            } ${isClickable ? "cursor-pointer hover:bg-cyan-300 hover:text-slate-950" : "cursor-default"}`}
        >
            {label}
        </button>
    );
}
