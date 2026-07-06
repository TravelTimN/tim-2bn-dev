import { useState } from "react";
import { navLinks } from "../../data/navLinks";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sectionIds = navLinks.map((link) => link.id);
    const activeSection = useScrollSpy(sectionIds);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 bg-slate-900 text-white shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <a
                    href="#hero"
                    onClick={closeMenu}
                    className="text-xl font-bold tracking-wide transition hover:text-cyan-400"
                >
                    TravelTimN
                </a>

                <nav aria-label="Main navigation" className="hidden md:block">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        className={`transition ${
                                            isActive ? "text-cyan-400" : "text-slate-200 hover:text-cyan-400"
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((current) => !current)}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-sm md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? "Close" : "Menu"}
                </button>
            </div>

            {isMenuOpen && (
                <nav aria-label="Mobile navigation" className="border-t border-slate-700 bg-slate-900 md:hidden">
                    <ul className="mx-auto flex max-w-7xl flex-col px-4 py-4">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={closeMenu}
                                        className={`block py-3 transition ${
                                            isActive ? "text-cyan-400" : "text-slate-200 hover:text-cyan-400"
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </header>
    );
}
