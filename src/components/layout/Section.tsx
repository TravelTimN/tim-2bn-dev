import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ANIMATION_DURATION, ANIMATION_OFFSET } from "../../constants/animations";
import SectionHeading from "../ui/SectionHeading";

type SectionProps = {
    id: string;
    title?: string;
    eyebrow?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
};

export default function Section({ id, title, eyebrow, subtitle, children, className = "" }: SectionProps) {
    return (
        <motion.section
            id={id}
            className={`py-20 ${className}`}
            initial={{ opacity: 0, y: ANIMATION_OFFSET.medium }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
                duration: ANIMATION_DURATION.normal,
                ease: "easeOut",
            }}
        >
            <div className="mx-auto max-w-7xl px-4">
                {title && <SectionHeading title={title} eyebrow={eyebrow} subtitle={subtitle} />}

                {children}
            </div>
        </motion.section>
    );
}
