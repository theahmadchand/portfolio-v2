"use client";

import { Fragment } from "react";
import { projectsData } from "@/libs/data";
import Project from "./project";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Projects() {
    const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.5 });

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map(({ title, description, tags, imageUrl }) => (
                    <Fragment key={title}>
                        <Project title={title} description={description} tags={tags} imageUrl={imageUrl} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
