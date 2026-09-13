export type Lang = "en" | "pt-BR";

export type StatusKey =
  | "concept"
  | "prototype"
  | "poc"
  | "development"
  | "production";

export type FlowStep = string | { label: string; items: string[] };

export interface ProjectCaseStudy {
  problem: string;
  product: string;
  architecture: string;
  decisions: string;
  challenges: string;
  tradeoffs: string;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  status: StatusKey;
  flow: FlowStep[];
  concepts: string[];
  tagline?: string;
  caseStudy: ProjectCaseStudy;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    logo: string;
    work: string;
    capabilities: string;
    approach: string;
    about: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
  };
  langSwitch: {
    label: string;
  };
  hero: {
    role: string;
    title: string;
    subtitle: string;
    tags: string[];
    primaryCta: string;
    secondaryCta: string;
    location: string;
    scroll: string;
  };
  positioning: {
    kicker: string;
    title: string;
    message: string;
    flow: string[];
  };
  capabilities: {
    kicker: string;
    title: string;
    subtitle: string;
    areas: Array<{ id: string; title: string; items: string[] }>;
  };
  intersection: {
    kicker: string;
    title: string;
    center: string;
    message: string;
    circles: Array<{ title: string; items: string[] }>;
  };
  work: {
    kicker: string;
    title: string;
    subtitle: string;
    statusLabel: string;
    flowLabel: string;
    conceptsLabel: string;
    caseStudyLabel: string;
    caseStudyClose: string;
    sections: {
      problem: string;
      product: string;
      architecture: string;
      decisions: string;
      challenges: string;
      tradeoffs: string;
    };
    statuses: Record<StatusKey, string>;
    projects: Project[];
  };
  approach: {
    kicker: string;
    title: string;
    message: string;
    steps: Array<{ id: string; title: string; description: string }>;
  };
  framework: {
    kicker: string;
    title: string;
    explanation: string;
    top: string;
    middle: string[];
    bottom: string;
    questionsTitle: string;
    questions: string[];
  };
  experience: {
    kicker: string;
    title: string;
    body: string;
    areas: string[];
  };
  legacy: {
    kicker: string;
    title: string;
    message: string;
  };
  stack: {
    kicker: string;
    title: string;
    subtitle: string;
    groups: Array<{ title: string; items: string }>;
  };
  cta: {
    title: string;
    text: string;
    linkedin: string;
    github: string;
    email: string;
  };
  footer: {
    name: string;
    tagline: string;
    rights: string;
  };
}
