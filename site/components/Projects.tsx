import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects({ t }: { t: Dictionary }) {
  return (
    <section
      id="work"
      className="scroll-mt-24 py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            kicker={t.work.kicker}
            title={t.work.title}
            subtitle={t.work.subtitle}
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {t.work.projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 50}>
              <ProjectCard project={project} t={t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
