import { ref } from "vue";
import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", () => {

const skills = ref([
  {
    category: "Frontend Development",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "Vue.js (Vue 3, Composition API)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Python",
      "REST APIs",
    ],
  },

  {
    category: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
    ],
  },

  {
    category: "Tools & Version Control",
    skills: [
      "Git & GitHub",
      "Vite",
      "Figma",
      "Agile Development Practices",
      "Asynchronous Workflows",
    ],
  },

  {
    category: "UI/UX & Design Tools",
    skills: [
      "Figma",
      "CorelDRAW",
      "Inkscape",
      "Responsive UI Design",
    ],
  },

  {
    category: "Data & Integration",
    skills: [
      "API Integration",
      "JSON Data Handling",
      "Data Visualization (Chart.js)",
    ],
  },

  {
    category: "Domain Focus",
    skills: [
      "Maritime Digitalization",
      "Maritime Digital Systems",
      "Big Data",
      "Data visualization",
      "Digital Transformation",
    ],
  },

  {
    category: "Soft Skills",
    skills: [
      "Communication",
      "Team Collaboration",
      "Problem Solving",
      "Critical Thinking",
    ],
  },
]);
  return { skills };
});
