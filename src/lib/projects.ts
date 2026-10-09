export type Project = {
  slug: string;
  name: string;
  company: string;
  role: string;
  years: string;
  summary: string;
  tags?: string[];
  /** Thumbnail for the Other Works strip (public/ path). */
  thumb?: string;
  /** object-position for the thumbnail, when the default (center) crops badly. */
  thumbPos?: string;
};

/**
 * Main gallery — senior product-design work shipped as sole or lead designer.
 * Long-form case-study bodies live in content/projects/<slug>.md.
 */
export const projects: Project[] = [
  {
    slug: "turngate",
    name: "A SIEM for your SaaS",
    company: "Turngate",
    role: "Lead Product Designer",
    years: "2023–2026",
    summary:
      "Founding designer at a seed-stage security startup — owned product design from pre-product through launch, built the visual language and a 189-component React design system, and led the platform's expansion into AI-agent observability.",
    tags: ["Design system", "0→1", "AI observability"],
  },
  {
    slug: "songtrust",
    name: "Redesigning royalty registration",
    company: "Songtrust · Downtown Music Holdings",
    role: "Senior Product Designer",
    years: "2021–2023",
    summary:
      "Redesigned the dense registration flow songwriters must complete to collect mechanical royalties through UX research methodologies. Led the company's new design system creation during its migration to React.",
    tags: ["Complex forms", "Design system", "Research"],
  },
  {
    slug: "onetech",
    name: "From IoT to Edge AI",
    company: "ONE Tech (now MicroAI)",
    role: "UX Designer",
    years: "2018–2021",
    summary:
      "Sole UX designer for a mobile-first IoT platform, before pivoting to an Edge AI platform embedding machine learning on industrial machinery. Focused on data visualizations and alert management.",
    tags: ["Data visualization", "IoT & edge AI", "Dashboards"],
  },
  {
    slug: "armadillostock",
    name: "Making licensing legible",
    company: "Armadillo Stock",
    role: "UI/UX Designer",
    years: "2023–Present",
    summary:
      "A community-run stock image platform where illustrators license work directly and keep 100% of their commissions. I own the information architecture, page layouts and Figma component system.",
    tags: ["Information architecture", "Design system", "Accessibility"],
  },
];

/**
 * Other Works — a single-row showcase of earlier and personal projects. These
 * link to their own lighter case studies but stay out of the main gallery.
 */
export const otherWorks: Project[] = [
  {
    slug: "spooky-season",
    name: "Spooky Season Event Aggregator",
    company: "Personal project · open source",
    role: "Design & Development",
    years: "2026",
    summary:
      "An open-source Google Sheets app that turns the Halloween event fliers friends post on Instagram into a sorted, filterable public page, using Claude to read each flier.",
    thumb: "/other-works/spooky-season.png",
    thumbPos: "top",
  },
  {
    slug: "melissadowell-redesign",
    name: "Redesigning melissadowell.com",
    company: "Personal project",
    role: "Design & Development",
    years: "2026",
    summary:
      "A ground-up rebuild of this very site — retiring a hand-coded, hand-illustrated portfolio for a modern, accessible one built with Next.js, Claude, and Figma.",
    thumb: "/other-works/melissadowell.png",
    thumbPos: "left",
  },
  {
    slug: "vmt",
    name: "Volunteer Management Toolkit",
    company: "HCDE Capstone · University of Washington",
    role: "UX Research & Design",
    years: "2022",
    summary:
      "A six-month graduate capstone helping food-justice nonprofits prepare client-facing volunteers to embody organizational values — from generative research through a shipped, delivered toolkit.",
    thumb: "/other-works/vmt.png",
  },
  {
    slug: "sketchys",
    name: "Dr. Sketchy's hub site",
    company: "Dr. Sketchy's Anti-Art School",
    role: "Project Manager & Front-End Dev",
    years: "2010–2018",
    summary:
      "Led design and front-end for a CMS hub connecting 100+ Dr. Sketchy's branches worldwide — profiles, a shared blog, events, and ticketing — launched in two months against a tight deadline.",
    thumb: "/other-works/dr-sketchys.png",
  },
  {
    slug: "soundsustainability",
    name: "Sound Sustainability",
    company: "Founder Institute · UW independent study",
    role: "UX Researcher",
    years: "2021",
    summary:
      "User and market research in the hard-of-hearing community to shape an affordable over-the-counter hearing aid. The startup won the WRF Capital Grand Prize at the 2021 Hollomon Health Innovation Challenge.",
    thumb: "/other-works/sound-sustainability.png",
  },
  {
    slug: "fctry",
    name: "FCTRY product design",
    company: "FCTRY · Brooklyn",
    role: "Product Designer",
    years: "2016–2017",
    summary:
      "Industrial and packaging design for a Brooklyn toy and cosmetics studio — from Unicorn Snot glitter to hand-sculpted action figures — ten products in a year, with overseas manufacturing and FDA/EU compliance.",
    thumb: "/other-works/fctry.jpg",
  },
  {
    slug: "narwhals",
    name: "Narwhal BBQ Skewers",
    company: "Narwhal Skewers",
    role: "Founder & Designer",
    years: "2013–2014",
    summary:
      "Stainless-steel barbecue skewers shaped like narwhals — a business I built from sketches and clay sculpts through a funded Kickstarter, overseas production, and worldwide retail.",
    thumb: "/other-works/narwhals.jpg",
  },
];

/** Every project across both lists, for case-study lookups. */
export const allProjects: Project[] = [...projects, ...otherWorks];
