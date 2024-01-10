import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/library/data";
import Project from "./Project";

export default function MyProjects() {
  return (
    <section>
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
