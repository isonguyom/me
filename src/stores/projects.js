import { ref } from "vue";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {
  let id = 0;

  const projects = ref([
    {
      id: id++,
      title: "Easy Access",
      image: "assets/easy-access.png",
      link: "https://easyaccess.com.ng",
      tags: ["Vue.js", "Pinia", "Tailwind CSS", "Dashboard"],
      description:
        "Easy Access is a platform that provides bills payment and subscription services. Built the website and dashboard frontend.",
    },
    {
      id: id++,
      title: "DCOIN Exchange",
      image: "assets/dcoin.png",
      link: "https://dcoinexchange.com",
      tags: ["Vue.js", "Pinia", "Tailwind CSS", "Dashboard"],
      description:
        "DCOIN is a cryptocurrency exchange platform for buying and selling crypto and gift cards. Built the website and dashboard frontend.",
    },
    {
      id: id++,
      title: "FlowPay",
      image: "assets/flowpay.png",
      link: "https://flowpayapp.vercel.app",
      tags: ["Vue.js", "Tailwind", "Pinia", "Node.js", "Express.js", "MongoDB", "Dashboard"],
      description:
        "A full-stack cross-border payment dashboard with real-world complexity across both frontend and backend.",
    },
    {
      id: id++,
      title: "Port Ledger",
      image: "assets/portledger.png",
      link: "https://port-ledger.vercel.app/dashboard",
      tags: ["Next.js", "Tailwind", "TypeScript", "Dashboard"],
      description:
        "Port Ledger is a maritime operations management platform designed to streamline vessel records, cargo tracking, port activities, and operational reporting through a centralized digital dashboard.",
    },
    {
      id: id++,
      title: "Borderless",
      image: "assets/borderless.png",
      link: "https://borderless-peach.vercel.app",
      tags: ["Vue.js", "Dashboard", "JSON Server"],
      description:
        "Borderless is a simulation of a cross-border payment system designed to make complex financial flows simple, reliable, and user-friendly.",
    },
    {
      id: id++,
      title: "Drag & Drop Image gallery",
      image: "assets/gallery.png",
      link: "https://isonguyom.github.io/drag-and-drop-gallery",
      tags: ["React", "API Integration", "AuthO"],
      description:
        "A simple drag and drop image gallery built with React with Auth0 authentication.",
    },
    {
      id: id++,
      title: "Angel's Pastries Services",
      image: "assets/angel.gif",
      link: "",
      tags: ["Logo", "Branding", "Graphic Design"],
      description: "Angel's Pastries Services is a bakery that specializes in cakes and pastries. ",
    },
    {
      id: id++,
      title: "Tiptop Design Agency",
      image: "assets/tiptop.gif",
      link: "https://tiptopdesign.netlify.app",
      tags: ["Website", "HTML/CSS", "Logo", "UI design", "GSAP"],
      description:
        "This is website for a design agency that showcases their services and portfolio.",
    },

    {
      id: id++,
      title: "JavaScript Quiz app",
      image: "assets/quiz-app.png",
      link: "https://isonguyom.github.io/quizAppJs",
      tags: ["JavaScript"],
      description:
        "A simple JavaScript quiz app that allows users to test their knowledge on various topics.",
    },
  ]);
  return { projects };
});
