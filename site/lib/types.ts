export type Lang = "en" | "pt-BR";

export type FlowStep = string | { label: string; items: string[] };

export interface Project {
  id: string;
  name: string;
  category: string;
  status: string;
  tagline: string;
  capabilities: string[];
  role: string;
  problem: string;
  opportunity: string;
  product: string;
  architecture: string;
  architectureFlow: FlowStep[];
  ai: string;
  aiItems: string[];
  decisions: string[];
  impact: string[];
  metrics: string[];
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
    approach: string;
    about: string;
    stack: string;
    contact: string;
    connect: string;
    menuOpen: string;
    menuClose: string;
  };
  langSwitch: {
    label: string;
  };
  hero: {
    badge: string;
    name: string;
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    tags: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  what: {
    kicker: string;
    title: string;
    subtitle: string;
    flow: string[];
    blocks: Array<{ title: string; items: string }>;
  };
  work: {
    kicker: string;
    title: string;
    subtitle: string;
    viewCase: string;
    close: string;
    labels: {
      problem: string;
      product: string;
      impact: string;
      opportunity: string;
      architecture: string;
      ai: string;
      decisions: string;
      myRole: string;
      successMetrics: string;
    };
    projects: Project[];
  };
  approach: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: Array<{ id: string; title: string; description: string }>;
    measureTitle: string;
    measureNote: string;
    metricGroups: Array<{ label: string; items: string[] }>;
  };
  framework: {
    kicker: string;
    title: string;
    subtitle: string;
    dimensions: Array<{ title: string; question: string }>;
  };
  background: {
    kicker: string;
    title: string;
    message: string;
    body: string;
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
    contact: string;
  };
  footer: {
    name: string;
    tagline: string;
    rights: string;
  };
}
