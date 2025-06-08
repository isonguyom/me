import { ref } from "vue";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {
  let id = 0;

  const projects = ref([
    {
      id: id++,
      title: "Vivstock",
      image: "assets/vivstock.png",
      link: "https://vivstock.com",
      tags: ['Auth pages', 'Dashboard'],
      description: "A stock trading platform that allows users to buy and sell stocks. Responsible for building the auth pages and dashboard(user and admin) frontend",
    },
    {
      id: id++,
      title: "DCOIN Exchange",
      image: "assets/dcoin.png",
      link: "https://dcoinexchange.com",
      tags: ['Website', 'Dashboard'],
      description: "DCOIN is a cryptocurrency exchange platform for buying and selling crypto and gift cards. Built the website and dashboard frontend.",
    },
    {
      id: id++,
      title: "Easy Access",
      image: "assets/easy-access.png",
      link: "https://easyaccess.com.ng",
      tags: ['Website', 'Dashboard'],
      description: "Easy Access is a platform that provides bills payment and subscription services. Built the website and dashboard frontend.",
    },
    {
      id: id++,
      title: "Angel's Pastries Services",
      image: "assets/angel.png",
      link: "",
      tags: ['Logo'],
      description: "Angel's Pastries Services is a bakery that specializes in cakes and pastries. ",
    },
    {
      id: id++,
      title: "Tiptop Design Agency",
      image: "assets/tiptop.png",
      link: "https://tiptopdesign.netlify.app",
      tags: ['Website', 'Logo', 'UI design'],
      description: "This is website for a design agency that showcases their services and portfolio.",
    },
    {
      id: id++,
      title: "React Image gallery",
      image: "assets/gallery.png",
      link: "https://isonguyom.github.io/drag-and-drop-gallery",
      tags: ['web dev'],
      description: "A simple drag and drop image gallery built with React with Auth0 authentication.",
    },
    {
      id: id++,
      title: "World Citizen",
      image: "assets/world-citizen.png",
      link: "https://worldcitizendotorg.netlify.app",
      tags: ['Website', 'UI/UX design', 'logo'],
      description: "World Citizen is a non-profit organization that aims to promote cloth donation.",
    },
    {
      id: id++,
      title: "JavaScript Quiz app",
      image: "assets/quiz-app.png",
      link: "https://isonguyom.github.io/quizAppJs",
      tags: ['web dev'],
      description: "A simple JavaScript quiz app that allows users to test their knowledge on various topics.",
    },
  ]);
  return { projects };
});
