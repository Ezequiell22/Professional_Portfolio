export type Lang = "en" | "pt-BR";

export type StatusKey =
  | "concept"
  | "prototype"
  | "development"
  | "experiment"
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
  featured?: boolean;
  flow: FlowStep[];
  concepts: string[];
  tagline?: string;
  caseStudy: ProjectCaseStudy;
}

export interface CapabilityArea {
  id: string;
  title: string;
  summary: string;
  details: string[];
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
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  capabilities: {
    kicker: string;
    title: string;
    subtitle: string;
    expandLabel: string;
    collapseLabel: string;
    areas: CapabilityArea[];
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
    featuredLabel: string;
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
  thinking: {
    kicker: string;
    title: string;
    intro: string;
    tensions: Array<{ title: string; body: string }>;
    top: string;
    middle: string[];
    bottom: string;
    diagramCaption: string;
  };
  approach: {
    kicker: string;
    title: string;
    message: string;
    steps: Array<{ id: string; title: string; description: string }>;
  };
  experience: {
    kicker: string;
    title: string;
    body: string;
    body2: string;
    pathLabel: string;
    progression: string[];
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
