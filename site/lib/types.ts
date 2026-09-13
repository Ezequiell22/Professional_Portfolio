export type Lang = "en" | "pt-BR";

export type FlowStep = string | { label: string; items: string[] };

export interface BeforeAfter {
  flow: FlowStep[];
  notes?: string[];
}

export interface MetricPair {
  outcome: string;
  metric: string;
}

export interface Project {
  name: string;
  category: string;
  featured?: boolean;
  problem: string;
  solution: string;
  before: BeforeAfter;
  after: BeforeAfter;
  impact: string[];
  metrics?: MetricPair[];
  tech: string[];
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
  productManagement: {
    kicker: string;
    title: string;
    subtitle: string;
    lifecycle: string[];
    statement: string;
  };
  work: {
    kicker: string;
    title: string;
    subtitle: string;
    completedLabel: string;
    featuredLabel: string;
    labels: {
      problem: string;
      solution: string;
      before: string;
      after: string;
      impact: string;
      metricsToMeasure: string;
      aiArchitecture: string;
    };
    projects: Project[];
  };
  approach: {
    kicker: string;
    title: string;
    message: string;
    steps: Array<{ id: string; title: string; description: string }>;
  };
  measure: {
    kicker: string;
    title: string;
    chainLabel: string;
    chain: Array<{ label: string; example: string }>;
    okrTitle: string;
    objectiveLabel: string;
    objective: string;
    keyResultsLabel: string;
    keyResults: string[];
    metricGroups: Array<{ label: string; items: string[] }>;
    disclaimer: string;
  };
  prioritization: {
    kicker: string;
    title: string;
    formulaTop: string[];
    formulaBottom: string;
    criteria: string[];
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
