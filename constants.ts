export const METADATA = {
  title: "Portfolio",
  description:
    "I specialize in uniting cutting-edge design, creating seamless user experiences through modern frontend and backend technologies, with a focus on blockchain and dApp innovations",
  siteUrl: "https://deeptrivedi.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop seamless fullstack apps",
  "I develop modern frontend apps",
  "I develop modern DApps",
  "I design dynamic user experience",
];

export const EMAIL = "deepbtrivedi04@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/deep-trivedi-a12893258/",
  github: "https://github.com/thedeeppp",
  twitter: "https://x.com/deep_trivedi__",
  instagram: "https://www.instagram.com/deep_trivedi__/",
  // leetcode:"https://leetcode.com/the_deeppp/",
  
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Plinko - A casino game",
    image: "/projects/plinko.png",
    blurImage: "/projects/plinko.png",
    description: "A casino game built with React, GSAP, Canvas and Tailwind",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.github.com/thedeeppp/plinko/",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "URL Shortner",
    image: "/projects/urlShortner.png",
    blurImage: "/projects/urlShortner.png",
    description: "URL shortner with analytics and custom short links",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.github.com/thedeeppp/url-shortner/",
    tech: ["javascript", "gsap", "tailwind", "go", "mongodb"],
  },
  {
    name: "Solana wallet adapter DApp",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "A very basic DApp to interact with Solana wallet adapter",
    gradient: ["#245B57", "#004741"],
    url: "https://www.github.com/thedeeppp/solana-wallet-adapter/",
    tech: ["javascript", "react", "gsap"],
  },
  
];

export const SKILLS = {
  frontend: [
    "go",
    "rust", 
    "nodejs",
    "express",
    "mongodb",
    "postman",
    "next",
    "react",
    "typescript",
    "javascript",
    "redux",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Lead @Fusion",
    size: ItemSize.SMALL,
    subtitle:
      "Served as Full Stack Lead, building solutions for various problems faced by the college administration",
    // image: "/timeline/reactindia.svg",
    slideImage: "/timeline/mern.webp",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer @Phyllo (June'24 - Aug'24)",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @Core team, solving problems around Livingroom device performance",
    // image: "/timeline/hotstar.",
    slideImage: "/timeline/Phyllo.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
  timeline?:string;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
