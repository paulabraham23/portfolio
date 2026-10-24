/**
 * Central typed content for Paul Abraham's portfolio.
 * Edit this file to update profile, projects, experience, and contact.
 * Do not invent unverified facts — use placeholders (null / empty) instead.
 */

export type ProjectStatus = "published" | "in-development" | "completed" | "ongoing";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type MediaPlaceholder = {
  kind: "placeholder";
  label: string;
  caption?: string;
};

export type MediaImage = {
  kind: "image";
  src: string;
  alt: string;
  caption?: string;
};

export type Media = MediaPlaceholder | MediaImage;

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  status: ProjectStatus;
  role: string;
  technologies: string[];
  problem: string;
  audience: string;
  productDecisions: string[];
  engineeringChallenges: string[];
  overview: string;
  parentExperience?: string;
  childExperience?: string;
  designFlows?: string[];
  architecture?: string;
  decisionsTradeoffs?: string[];
  lessons: string[];
  nextImprovements: string[];
  verifiedOutcomes: string[];
  media: Media[];
  links: LinkItem[];
  featured?: boolean;
  /** When true, show on homepage work overview */
  showOnHome?: boolean;
};

export type EngineeringCase = {
  id: string;
  title: string;
  status: ProjectStatus;
  organization: string | null;
  role: string;
  timeline: string | null;
  problem: string;
  systems: string[];
  architecture: string | null;
  implementation: string[];
  reliabilityNotes: string | null;
  decisions: string[];
  outcomes: string[];
  lessons: string[];
  evidence: string[];
  confidentialNote?: string;
};

export type EventSite = {
  id: string;
  name: string | null;
  description: string | null;
  year: string | null;
  url: string | null;
  media: Media;
};

export type TimelineItem = {
  id: string;
  title: string;
  organization: string | null;
  dateLabel: string | null;
  kind: "internship" | "founder" | "engineering" | "events" | "ongoing";
  description: string;
  highlights: string[];
};

export type Achievement = {
  id: string;
  title: string;
  organization: string | null;
  date: string | null;
  description: string;
  evidenceUrl: string | null;
  image: Media | null;
  kind: "award" | "certificate";
};

export type Education = {
  level: string;
  school: string | null;
  resultLabel: string;
  resultValue: string;
  expectedGraduation: string | null;
  notes: string | null;
};

export type Contact = {
  email: string | null;
  github: string | null;
  linkedin: string | null;
  resumePdf: string | null;
  otherProfiles: LinkItem[];
};

export type SiteContent = {
  profile: {
    name: string;
    wordmark: string;
    monogram: string;
    location: string | null;
    tagline: string;
    heroHeadline: string;
    heroSupport: string;
    story: string;
    about: string[];
    interests: string[];
  };
  nav: { label: string; href: string }[];
  projects: Project[];
  engineering: EngineeringCase[];
  eventSites: EventSite[];
  timeline: TimelineItem[];
  achievements: Achievement[];
  education: Education[];
  contact: Contact;
  resume: {
    summary: string;
    skillsVerified: string[];
    skillsPlaceholderNote: string | null;
  };
  meta: {
    title: string;
    description: string;
    siteUrl: string | null;
  };
};

export const site: SiteContent = {
  profile: {
    name: "Paul Abraham",
    wordmark: "Paul Abraham",
    monogram: "PA",
    location: "India",
    tagline: "I build products, engineer systems, and turn ideas into reality.",
    heroHeadline: "I build things that solve real problems.",
    heroSupport:
      "Student, software developer, and founder — building applications, developing technical systems, and exploring ideas through implementation.",
    story:
      "I build products, engineer systems, and turn ideas into reality — at the intersection of software engineering, entrepreneurship, and product development.",
    about: [
      "I am an Indian high-school student preparing for undergraduate study in the United States. I build and ship software: mobile products on Google Play, technical infrastructure for startups, and websites for events.",
      "My work is grounded in implementation. I take ideas from concept to working systems, own technical structure where I am trusted with it, and learn by building — not by claiming experience I have not earned.",
      "I am interested in computing as a way to turn engineering into useful products: clear problems, honest trade-offs, and software people can actually use.",
    ],
    interests: [
      "Software engineering",
      "Entrepreneurship",
      "Product development",
      "Technology systems",
    ],
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Engineering", href: "#engineering" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Résumé", href: "/resume" },
  ],

  projects: [
    {
      slug: "riva-family",
      name: "Riva Family",
      shortDescription:
        "Parent-child habits, activities, rewards, savings, and academic-progress — a family app published on Google Play.",
      category: "Mobile product",
      status: "published",
      role: "Founder / builder",
      technologies: [],
      problem:
        "Families need a shared space for habits, activities, rewards, savings, and academic progress — without turning parenting into another disconnected set of apps.",
      audience: "Parents and children using the app together.",
      productDecisions: [
        "Center the product on parent–child shared structure (habits, activities, rewards, savings, academic progress).",
        "Publish on Google Play as a real, installable product rather than a private prototype.",
      ],
      engineeringChallenges: [
        "Shipping a multi-sided family experience that must remain usable for both parents and children.",
        "Balancing feature ambition with a publishable, maintainable build.",
      ],
      overview:
        "Riva Family is a smart parenting app focused on tasks, rewards, and school reports for families. It is published on Google Play. The product direction covers parent-child habits, activities, rewards, savings, and academic progress. Specific feature completeness of the live build should be verified against the current Play listing and in-app experience — this case study does not claim every described direction is fully shipped.",
      parentExperience:
        "Parents can structure tasks, rewards, and school-related reporting within a shared family context. Exact screens and flows: see Play listing and product screenshots when available.",
      childExperience:
        "Children engage with activities and rewards as part of the family product. Exact child flows: placeholder pending product screenshots and walkthrough notes.",
      designFlows: [
        "Family onboarding and shared structure — details pending screenshots.",
        "Task / reward loops — details pending screenshots.",
        "Academic progress / school reports — details pending screenshots.",
      ],
      architecture:
        "Technical architecture details are not published here yet. Add stack, services, and diagrams only when verified.",
      decisionsTradeoffs: [
        "Prioritize a published Google Play release over an unfinished private build.",
        "Keep case-study claims limited to verified listing copy and confirmed product direction.",
      ],
      lessons: [
        "Publishing forces clarity: what ships matters more than what is imagined.",
        "Family products require empathy for two very different user mindsets.",
      ],
      nextImprovements: [
        "Add verified architecture notes and screenshots.",
        "Document product decisions with evidence from the live build.",
      ],
      verifiedOutcomes: [
        "Published on Google Play (listing: Smart parenting app with tasks, rewards, and school reports for your family).",
      ],
      media: [
        {
          kind: "placeholder",
          label: "Riva Family — product preview",
          caption: "Add Play Store or in-app screenshots here.",
        },
      ],
      links: [
        {
          label: "View on Google Play",
          href: "https://play.google.com/store/apps/details?id=com.rivafamily.app",
          external: true,
        },
      ],
      featured: true,
      showOnHome: true,
    },
    {
      slug: "spotr",
      name: "Spotr",
      shortDescription:
        "Find and share hidden gems — underrated spots, local plans, real explorers. Published on Google Play.",
      category: "Mobile product",
      status: "published",
      role: "Builder",
      technologies: [],
      problem:
        "People looking for underrated local spots need a dedicated way to find and share places beyond the usual recommendations.",
      audience: "Explorers and locals discovering and sharing spots.",
      productDecisions: [
        "Ship a dedicated discovery experience focused on hidden gems and local plans.",
        "Publish on Google Play with a clear listing identity distinct from similarly named apps.",
      ],
      engineeringChallenges: [
        "Building a publishable mobile product with a clear discovery loop.",
        "Additional engineering detail pending verified notes from Paul.",
      ],
      overview:
        "Spotr is published on Google Play. The listing describes it as a way to find and share hidden gems — underrated spots, local plans, and real explorers. This case study uses only verified listing information; deeper product and engineering detail is intentionally left as placeholders until supplied.",
      architecture:
        "Architecture and stack details not supplied yet — do not invent.",
      decisionsTradeoffs: [
        "Keep public narrative aligned with the official Play listing until richer evidence is available.",
      ],
      lessons: [
        "A clear store listing is part of the product story.",
        "Honest placeholders beat invented depth.",
      ],
      nextImprovements: [
        "Add role clarity, tech stack, screenshots, and engineering challenges once verified.",
      ],
      verifiedOutcomes: [
        "Published on Google Play (listing: Find & share hidden gems — underrated spots, local plans, real explorers).",
      ],
      media: [
        {
          kind: "placeholder",
          label: "Spotr — product preview",
          caption: "Add Play Store or in-app screenshots here.",
        },
      ],
      links: [
        {
          label: "View on Google Play",
          href: "https://play.google.com/store/apps/details?id=app.spotr.com",
          external: true,
        },
      ],
      featured: true,
      showOnHome: true,
    },
    {
      slug: "upcoming-app-01",
      name: "Upcoming app 01",
      shortDescription:
        "Mobile application currently in development. Name, features, and launch details to be added when ready.",
      category: "Mobile product",
      status: "in-development",
      role: "Builder",
      technologies: [],
      problem: "Problem statement pending — add when the product direction is ready to share.",
      audience: "Audience pending.",
      productDecisions: [],
      engineeringChallenges: [],
      overview:
        "One of four mobile apps built; not yet published. This entry is a configurable placeholder so the portfolio can stay honest about work in progress.",
      lessons: [
        "In-development work belongs in the portfolio with clear status, not as published claims.",
      ],
      nextImprovements: [
        "Replace placeholder name and description with verified product details.",
      ],
      verifiedOutcomes: [],
      media: [
        {
          kind: "placeholder",
          label: "In development",
          caption: "Screenshots and name forthcoming.",
        },
      ],
      links: [],
      featured: false,
      showOnHome: true,
    },
    {
      slug: "upcoming-app-02",
      name: "Upcoming app 02",
      shortDescription:
        "Second mobile application currently in development. Distinct from Upcoming app 01; details pending.",
      category: "Mobile product",
      status: "in-development",
      role: "Builder",
      technologies: [],
      problem: "Problem statement pending — add when the product direction is ready to share.",
      audience: "Audience pending.",
      productDecisions: [],
      engineeringChallenges: [],
      overview:
        "One of four mobile apps built; not yet published. Kept as a separate entry so unpublished work is visible without inventing a brand or launch date.",
      lessons: [
        "Separate in-development projects keep the work inventory accurate.",
      ],
      nextImprovements: [
        "Replace placeholder name and description with verified product details.",
      ],
      verifiedOutcomes: [],
      media: [
        {
          kind: "placeholder",
          label: "In development",
          caption: "Screenshots and name forthcoming.",
        },
      ],
      links: [],
      featured: false,
      showOnHome: true,
    },
  ],

  engineering: [
    {
      id: "startup-infrastructure",
      title: "Startup technical infrastructure",
      status: "completed",
      organization: null,
      role: "Technical builder",
      timeline: null,
      problem:
        "A growing startup needed technical infrastructure so the product and operations could run on a reliable foundation.",
      systems: [],
      architecture: null,
      implementation: [
        "Built technical infrastructure for a growing startup.",
        "Specific systems, services, and diagrams will be listed here once they can be disclosed accurately.",
      ],
      reliabilityNotes: null,
      decisions: [],
      outcomes: [
        "Delivered technical infrastructure supporting a growing startup (details pending verified disclosure).",
      ],
      lessons: [
        "Infrastructure work is judged by whether the team can depend on it — not by stack name-dropping.",
      ],
      evidence: [],
      confidentialNote:
        "Organization name, stack, traffic, and uptime figures are omitted until Paul supplies verified, shareable details.",
    },
    {
      id: "ongoing-startup-tech",
      title: "Ongoing startup technical structure",
      status: "ongoing",
      organization: null,
      role: "Responsible for technical structure",
      timeline: "Ongoing",
      problem:
        "Another startup needs ongoing care of its technical structure — systems that must stay coherent as the product evolves.",
      systems: [],
      architecture: null,
      implementation: [
        "Currently responsible for the technical structure of another startup.",
        "Scope and stack details remain configurable and confidential until approved for publication.",
      ],
      reliabilityNotes: null,
      decisions: [],
      outcomes: [],
      lessons: [
        "Ongoing ownership means clarity about what is finished versus what is still in progress.",
      ],
      evidence: [],
      confidentialNote:
        "No confidential product or employer details are disclosed here. Mark unfinished work as ongoing — never as complete.",
    },
  ],

  eventSites: [
    {
      id: "event-site-01",
      name: null,
      description:
        "Event website built for a real event. Client and campaign details pending.",
      year: null,
      url: null,
      media: {
        kind: "placeholder",
        label: "Event website preview",
        caption: "Add screenshot and event name when available.",
      },
    },
    {
      id: "event-site-02",
      name: null,
      description:
        "Additional event website. Entry reserved so multiple events can be documented without inventing clients.",
      year: null,
      url: null,
      media: {
        kind: "placeholder",
        label: "Event website preview",
        caption: "Add screenshot and event name when available.",
      },
    },
  ],

  timeline: [
    {
      id: "founder-journey",
      title: "Founder — building products",
      organization: null,
      dateLabel: null,
      kind: "founder",
      description:
        "Founded a startup and continue an entrepreneurial practice of ownership, learning, and implementation — shipping apps and taking technical responsibility.",
      highlights: [
        "Founded a startup",
        "Built four mobile apps (two published on Google Play)",
        "Ownership through implementation",
      ],
    },
    {
      id: "internship-django",
      title: "Web development internship",
      organization: null,
      dateLabel: null,
      kind: "internship",
      description:
        "Completed a web development internship involving Python and Django. Organization name and exact dates to be added when confirmed.",
      highlights: ["Python", "Django", "Web development"],
    },
    {
      id: "infra-timeline",
      title: "Startup technical infrastructure",
      organization: null,
      dateLabel: null,
      kind: "engineering",
      description:
        "Built the technical infrastructure for a growing startup. Timeline and organization placeholders until verified.",
      highlights: ["Infrastructure", "Technical ownership"],
    },
    {
      id: "event-sites-timeline",
      title: "Event websites",
      organization: null,
      dateLabel: null,
      kind: "events",
      description:
        "Built websites for multiple events. Specific clients and dates configurable in the central content file.",
      highlights: ["Event sites", "Client delivery"],
    },
    {
      id: "ongoing-timeline",
      title: "Ongoing startup technical role",
      organization: null,
      dateLabel: "Ongoing",
      kind: "ongoing",
      description:
        "Currently responsible for the technical structure of another startup.",
      highlights: ["Ongoing", "Technical structure"],
    },
  ],

  achievements: [
    {
      id: "entrepreneurship-win-01",
      title: "Entrepreneurship event win",
      organization: null,
      date: null,
      description:
        "Won an entrepreneurship event. Event name, rank, and date pending verified details.",
      evidenceUrl: null,
      image: null,
      kind: "award",
    },
    {
      id: "entrepreneurship-win-02",
      title: "Entrepreneurship event win",
      organization: null,
      date: null,
      description:
        "Won a second entrepreneurship event. Distinct from the first; specifics pending.",
      evidenceUrl: null,
      image: null,
      kind: "award",
    },
    {
      id: "cert-python",
      title: "Python certificate",
      organization: null,
      date: null,
      description:
        "Holds a Python certificate. Issuing organization and credential link pending.",
      evidenceUrl: null,
      image: null,
      kind: "certificate",
    },
    {
      id: "cert-robotics",
      title: "Robotics certificate",
      organization: null,
      date: null,
      description:
        "Holds a robotics certificate. Issuing organization and credential link pending.",
      evidenceUrl: null,
      image: null,
      kind: "certificate",
    },
  ],

  education: [
    {
      level: "Intermediate Public Examination — first year",
      school: null,
      resultLabel: "IPE first-year score",
      resultValue: "78%",
      expectedGraduation: null,
      notes:
        "School name, expected graduation, and Class 12 results are configurable. No GPA is derived from board percentage.",
    },
    {
      level: "SAT",
      school: null,
      resultLabel: "SAT score",
      resultValue: "1290",
      expectedGraduation: null,
      notes: null,
    },
  ],

  contact: {
    email: null,
    github: "https://github.com/paulabraham23",
    linkedin: null,
    resumePdf: null,
    otherProfiles: [],
  },

  resume: {
    summary:
      "Indian high-school student, software developer, and founder. Builds and ships mobile products, contributes technical infrastructure for startups, and delivers event websites. Preparing for undergraduate study in the United States (Fall 2027).",
    skillsVerified: ["Python", "Django", "Web development", "Mobile app development"],
    skillsPlaceholderNote:
      "Additional skills and tools can be listed here once verified — no invented stack claims.",
  },

  meta: {
    title: "Paul Abraham — Founder & Engineer",
    description:
      "Portfolio of Paul Abraham: student, software developer, and founder building products, systems, and real applications.",
    siteUrl: null,
  },
};

export function getProjectBySlug(slug: string): Project | undefined {
  return site.projects.find((p) => p.slug === slug);
}

export function getPublishedProjects(): Project[] {
  return site.projects.filter((p) => p.status === "published");
}

export function getHomeProjects(): Project[] {
  return site.projects.filter((p) => p.showOnHome);
}
