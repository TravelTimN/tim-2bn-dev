import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
    className?: string;
};

type ButtonAsButton = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

type ButtonAsLink = BaseButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    secondary: "border border-slate-600 text-white hover:border-cyan-400 hover:text-cyan-400",
    ghost: "text-slate-300 hover:text-cyan-400",
};

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
    const classes = `inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold transition ${variantClasses[variant]} ${className}`;

    if ("href" in props) {
        return (
            <a className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" className={classes} {...props}>
            {children}
        </button>
    );
}
