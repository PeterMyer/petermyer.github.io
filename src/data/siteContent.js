export const profile = {
  name: "Peter Myer",
  title: "Creative Full-Stack Developer",
  location: "Austin, Texas",
  intro:
    "I build thoughtful web products where design clarity and practical engineering work together.",
  focus:
    "Current focus: interactive education tools, habit systems, and AI-assisted workflows.",
  contactEmail: "peter.sr.myer@gmail.com",
};

export const aboutHighlights = [
  {
    icon: "fa-graduation-cap",
    title: "Cross-Disciplinary Background",
    description:
      "I studied illustration, political science, and business before moving into software. That mix helps me balance storytelling, systems thinking, and product decisions.",
  },
  {
    icon: "fa-code",
    title: "Engineering Foundation",
    description:
      "After starting with Python, I trained through Fullstack Academy in JavaScript across Node, Express, React, and relational databases.",
  },
  {
    icon: "fa-seedling",
    title: "Projects With Purpose",
    description:
      "I care most about products that help people improve skills, build habits, and make learning feel more achievable.",
  },
  {
    icon: "fa-kitchen-set",
    title: "Outside Of Work",
    description:
      "Cooking, camping, and games keep me creative. They also inspire product ideas around practice and progress.",
  },
];

export const projects = [
  {
    slug: "bookit",
    title: "BookIt",
    subtitle: "Article Workflow Organizer",
    status: "Case Study",
    description:
      "A Chrome-extension + web app workflow for collecting, organizing, and sharing reading from around the web.",
    stack: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL"],
    repoUrl: "https://github.com/PeterMyer/BookIt",
    liveUrl: "",
    image: "BookIt_web.png",
    impact:
      "Built to reduce tab-overload and help users turn scattered links into actionable reading queues.",
    lessons:
      "Validated the importance of frictionless capture flows and simple categorization over feature-heavy taxonomy.",
  },
  {
    slug: "byte",
    title: "Byte",
    subtitle: "Recipe Digitizer",
    status: "Archived",
    description:
      "A recipe tool for digitizing cookbook entries and calculating nutrition data for easier meal planning.",
    stack: ["JavaScript", "React", "Node.js", "REST APIs"],
    repoUrl: "https://github.com/PeterMyer/Byte-RecipeReader",
    liveUrl: "",
    image: "Byte_Reader.png",
    impact:
      "Explored OCR-adjacent parsing patterns and data normalization for recipe structures.",
    lessons:
      "Learned where UX constraints matter most when users transition from physical to digital content.",
  }
];

export const socialLinks = {
  github: "https://github.com/PeterMyer",
  linkedin: "https://www.linkedin.com/in/petermyer/",
};
