import {
  AnalyticsIcon,
  CalendarIcon,
  CodeIcon,
  MonitorIcon,
  TasksIcon,
  TreeIcon,
  WifiIcon,
} from "@icons";

// \u00A0 = no blank space bar
// *...* = decorated text

// 00
// General

export const APP_NAME = "pebble";
export const APP_PRIMARY = ["Download Pebble", "It's free"];
export const APP_PRIMARY_LINK =
  "https://github.com/srkdesign/pebble-productivity-app/releases"; // primary action on the page
export const APP_SECONDARY = ["Support Project", "Buy Theme"];
export const APP_SECONDARY_LINK = "PRICING_MODAL"; // secondary action on the page
export const BUILT_BY = "srkdesign";
export const BUILT_BY_LINK = "https://srkdesign.pro/en/";
export const LICENSE = "PolyForm Noncommercial License 1.0";
export const LICENSE_LINK =
  "https://polyformproject.org/licenses/noncommercial/1.0.0/";

export const NAVLINKS = [
  { title: "How it works", ref: "#architecture" },
  { title: "Interface", ref: "#interface" },
  { title: "Reflection", ref: "#analytics" },
  { title: "Pricing", ref: "#pricing" },
  { title: "FAQ", ref: "#faq" },
];

export const PURCHASE_PREVIEW = "https://placehold.co/1920x1080?text=Preview";

export const PURCHASE_LINKS = [
  {
    title: "Gumroad",
    href: "https://srkdesign.gumroad.com/",
    description: "Instant download, no account",
  },
  {
    title: "Fiverr",
    href: "https://www.fiverr.com/s/EgWK8V9",
    description: "Direct support from the author",
  },
  {
    title: "Kwork",
    href: "https://kwork.com/user/srkdesign",
    description: "Direct support from the author",
  },
  {
    title: "Boosty",
    href: "https://boosty.to/srkdesign",
    description: "Local cards accepted",
  },
];

export const MAIL = "pebble@srkdesign.pro";

// 01
// Hero Section
// Original: "Designed to be calm, built to stay local"

export const HERO_HEADING = [
  "Designed to be *calm,*",
  "built to stay *local.*",
];

export const HERO_PARAGRAPH =
  "Pebble is a self-hosted to-do app\u00A0 that\u00A0works\u00A0offline and syncs instantly.";

export const HERO_MEDIA = {
  type: "image", // "image" or "video"
  src: "https://placehold.co/1920x1080?text=App",
};

// 02
// How It Works
// Original: "A to-do app that lives on your own machine and works wherever you
// do, without the cloud, sync conflicts, or the premium plan."

export const ANIMATED_TEXT =
  "A to-do app that lives on your own machine and works wherever you do, *without the cloud, sync conflicts, or\u00A0the premium plan.*";

export const FEATURE_CARDS = [
  {
    icon: <MonitorIcon size={32} color="currentColor" />,
    title: "Runs from your home computer",
    text: "No special software or dedicated server required. If the computer is on, Pebble is running.",
  },
  {
    icon: <CodeIcon size={32} color="currentColor" />,
    title: "Set up once, use like a website",
    text: "Install Pebble on your computer, launch it once, then access it on any device by simply opening a webpage.",
  },
  {
    icon: <TreeIcon size={32} color="currentColor" />,
    title: "Works offline after first launch",
    text: "Works offline after first launch on a device, so you can view and edit your tasks anytime.",
  },
  {
    icon: <WifiIcon size={32} color="currentColor" />,
    title: "Syncs the moment you're home",
    text: "The moment your device reconnects to your home network, all your offline changes appear on every device.",
  },
];

// 03
// Interface
// Original: "The best interface is the one you forget is there"

export const INTERFACE_HEADING =
  "The *best interface* is the one you forget is there";

export const INTERFACE_TABS = [
  {
    slug: "tasks",
    icon: <TasksIcon size={20} color="currentColor" />,
    content: "https://placehold.co/1920x1080?text=Tasks",
  },
  {
    slug: "calendar",
    icon: <CalendarIcon size={20} color="currentColor" />,
    content: "https://placehold.co/1920x1080?text=Calendar",
  },
  {
    slug: "analytics",
    icon: <AnalyticsIcon size={20} color="currentColor" />,
    content: "https://placehold.co/1920x1080?text=Analytics",
  },
];

// 04
// Diagram
// Original: "Mindful pause to reflect"

export const DIAGRAM_HEADING = "Mindful *pause \nto reflect*";

export const DIAGRAM_PARAGRAPH =
  "Improve your work flow by noticing the patterns in the Analytics";

export const DIAGRAM_CARDS = [
  { label: "Task Completion Heatmap", label_mobile: "Heatmap", angle: -135 },
  {
    label: "Wind Rose and Completion Rate",
    label_mobile: "Wind Rose",
    angle: -90,
  },
  {
    label: "Time Spent By Project Diagram",
    label_mobile: "Time Spent",
    angle: -45,
  },
  {
    label: "What are you most focused on?",
    label_mobile: "Your focus?",
    angle: 135,
  },
  {
    label: "How many tasks you complete?",
    label_mobile: "Tasks completed?",
    angle: 90,
  },
  {
    label: "Where your time actually goes?",
    label_mobile: "Where time goes?",
    angle: 45,
  },
];

// 05
// Pricing
// Original: "Pricing"

export const PRICING_HEADING = "Pricing";
export const PRICING_PARAGRAPH =
  "Pebble is and will remain free. If you want to support the project, consider buying this landing page theme.";

export const PRICING_CARDS = [
  {
    title: "Productivity App",
    features: [
      "Supported on every platform",
      "Easy installation",
      "No data collected",
      "All tasks are on your machine",
    ],
    price: "$0",
    action: ["Download", "It's free", APP_PRIMARY_LINK],
  },
  {
    title: "Landing Page Template",
    features: [
      "For React and Wordpress",
      "Written and video instructions",
      "Demo content",
      "Unlimited updates",
      "Available on Kwork, Fiverr, Gumroad and\u00A0Boosty",
    ],
    price: "from $19",
    action: ["Support Project", "Buy Theme", APP_SECONDARY_LINK],
  },
];

// 06
// Questions
// Original: "Frequently asked questions"

export const FAQ_HEADING = "Frequently asked *questions*";

export const FAQ_CARDS = [
  {
    question: "Can I use Pebble on my phone?",
    answer:
      "Yes. Open Pebble in your phone's browser once while connected to your home network, install it like a regular app, launch it online once and it works offline from that point on.",
  },
  {
    question: "What if I want to access my tasks away from home?",
    answer:
      "Your tasks are saved on your device and fully available offline — so even away from home, your list is always with you. Just remember not to clear your browser cache while you are away.",
  },
  {
    question: "Does Pebble sync automatically?",
    answer:
      "Yes. The moment your device reconnects to your home network, every change you made syncs instantly across all your devices.",
  },
  {
    question: "Is my data private?",
    answer:
      "Pebble runs on your own hardware — your tasks never leave your home network and are never sent to an external server.",
  },
  {
    question: "Is Pebble really free?",
    answer:
      "Yes, with no conditions. There is no premium plan, no trial period, and no features locked behind a paywall. The code is open and the price is zero.",
  },
];

export const FAQ_OTHER =
  "If your question is not answered above, you are welcome to reach out at";

// 07
// Footer CTA
// Original: "Less noise. More done."

export const CTA_HEADING = "Less noise. *More done.*";
export const CTA_PARAGRAPH =
  "Pebble removes the noise, stays transparent, and lives on GitHub.";
