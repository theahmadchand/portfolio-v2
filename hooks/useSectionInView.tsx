import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/libs/types";

type UseSectionInViewOptions = {
    sectionName: SectionName;
    threshold?: number;
};

export function useSectionInView(options: UseSectionInViewOptions) {
    const { sectionName, threshold = 0.75 } = options;

    const { ref, inView } = useInView({ threshold });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return { ref };
}
