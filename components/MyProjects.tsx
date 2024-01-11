"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/library/data";
import Project from "./Project";
import { useSectionInView } from "@/library/hooks";

export default function MyProjects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>

      <div>
        {projectsData.map((project, idx) => (
          <React.Fragment key={idx}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
