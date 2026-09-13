"use client";

import { useState } from "react";
import type { Dictionary, Project } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import CaseModal from "./CaseModal";

export default function Work({ t }: { t: Dictionary }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={t.work.kicker}
            title={t.work.title}
            subtitle={t.work.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {t.work.projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 50}>
              <ProjectCard project={project} t={t} onView={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>
      </Container>

      {selected ? (
        <CaseModal project={selected} t={t} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}
