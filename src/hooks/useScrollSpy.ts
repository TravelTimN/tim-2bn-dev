import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries.filter((entry) => entry.isIntersecting);

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: "-30% 0px -60% 0px",
                threshold: 0,
            },
        );

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);

            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sectionIds]);

    return activeSection;
}
