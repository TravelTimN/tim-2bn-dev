import { motion } from "motion/react";
import imgTim from "../../assets/tim.png";
import { ANIMATION_DELAY, ANIMATION_DURATION, ANIMATION_OFFSET } from "../../constants/animations";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section id="hero" className="min-h-[80vh] py-24">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: ANIMATION_OFFSET.medium }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: ANIMATION_DURATION.normal,
                        delay: ANIMATION_DELAY.short,
                        ease: "easeOut",
                    }}
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                        Full-Stack Developer Mentor
                    </p>

                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Building practical, polished web experiences.
                    </h1>

                    <p className="mb-8 max-w-2xl text-lg text-slate-300">
                        I am Tim Nelson, a full-stack software development mentor focused on Python, Django, JavaScript,
                        React, TypeScript, tooling, documentation, and developer-friendly user experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button href="#projects">View Projects</Button>
                        <Button href="#contact" variant="secondary">
                            Contact Me
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className="rounded-2xl border border-slate-700 bg-slate-800 p-4"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: ANIMATION_DURATION.slow,
                        delay: ANIMATION_DELAY.medium,
                        ease: "easeOut",
                    }}
                >
                    <img src={imgTim} alt="Retro travel-inspired portfolio artwork" className="rounded-xl" />

                    <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900 p-5">
                        <p className="text-sm uppercase tracking-widest text-slate-400">Current build</p>

                        <p className="mt-2 text-2xl font-bold">React + TypeScript Portfolio</p>

                        <p className="mt-3 text-slate-300">
                            Professional developer portfolio with retro adventure-game energy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
