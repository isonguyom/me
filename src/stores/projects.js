import { ref } from "vue";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {
  let id = 0;

  const projects = ref([
    {
      id: id++,
      title: "Easy Access",
      image: "projects/easy-access.png",
      link: "https://easyaccess.com.ng",
      tags: ["Vue.js", "Pinia", "Tailwind CSS", "Dashboard"],
      description:
        "Easy Access is a platform that provides bills payment and subscription services. Built the website and dashboard frontend.",
    },
    {
      id: id++,
      title: "Naviscope ETA",
      image: "projects/naviscope.png",
      link: "https://naviscope-eta.vercel.app/",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Maritime Tech",
      ],
      description:
        "Naviscope ETA is a maritime utility app for calculating vessel estimated time of arrival (ETA), estimating fuel consumption, and optimizing voyage planning for shipping operations.",
    },
    {
      id: id++,
      title: "DCOIN Exchange",
      image: "projects/dcoin.png",
      link: "https://dcoinexchange.com",
      tags: ["Vue.js", "Pinia", "Tailwind CSS", "Dashboard"],
      description:
        "DCOIN is a cryptocurrency exchange platform for buying and selling crypto and gift cards. Built the website and dashboard frontend.",
    },
    {
      id: id++,
      title: "FlowPay",
      image: "projects/flowpay.png",
      link: "https://flowpayapp.vercel.app",
      tags: ["Vue.js", "Tailwind", "Pinia", "Node.js", "Express.js", "MongoDB", "Dashboard"],
      description:
        "A full-stack cross-border payment dashboard with real-world complexity across both frontend and backend.",
    },
    {
      id: id++,
      title: "Port Ledger",
      image: "projects/portledger.png",
      link: "https://port-ledger.vercel.app/dashboard",
      tags: ["Next.js", "Tailwind", "TypeScript", "Dashboard"],
      description:
        "Port Ledger is a maritime operations management platform designed to streamline vessel records, cargo tracking, port activities, and operational reporting through a centralized digital dashboard.",
    },
    {
      id: id++,
      title: "Borderless",
      image: "projects/borderless.png",
      link: "https://borderless-peach.vercel.app",
      tags: ["Vue.js", "Dashboard", "JSON Server"],
      description:
        "Borderless is a simulation of a cross-border payment system designed to make complex financial flows simple, reliable, and user-friendly.",
    },
    {
      id: id++,
      title: "Drag & Drop Image gallery",
      image: "projects/gallery.png",
      link: "https://isonguyom.github.io/drag-and-drop-gallery",
      tags: ["React", "API Integration", "AuthO"],
      description:
        "A simple drag and drop image gallery built with React with Auth0 authentication.",
    },
    {
      id: id++,
      title: "Angel's Pastries Services",
      image: "projects/angel.gif",
      link: "",
      tags: ["Logo", "Branding", "Figma", "Graphic Design"],
      description: "Angel's Pastries Services is a bakery that specializes in cakes and pastries. ",
    },
    {
      id: id++,
      title: "Tiptop Design Agency",
      image: "projects/tiptop.gif",
      link: "https://tiptopdesign.netlify.app",
      tags: ["Website", "HTML/CSS", "Logo", "UI design", "GSAP"],
      description:
        "This is website for a design agency that showcases their services and portfolio.",
    },

    {
      id: id++,
      title: "JavaScript Quiz app",
      image: "projects/quiz-app.png",
      link: "https://isonguyom.github.io/quizAppJs",
      tags: ["JavaScript"],
      description:
        "A simple JavaScript quiz app that allows users to test their knowledge on various topics.",
    },
  ]);
  return { projects };
});
