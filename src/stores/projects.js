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
      tags: ['web dev'],
      description: "Vivstock is a stock trading platform that allows users to buy and sell stocks. It provides real-time stock prices, charts, and news.",
    },
    {
      id: id++,
      title: "DCOIN Exchange",
      image: "assets/dcoin.png",
      link: "https://dcoinexchange.com",
      tags: ['web dev'],
      description: "DCOIN is a cryptocurrency exchange platform that allows users to buy, sell, and trade various cryptocurrencies. It also offers a reliable way for buying and selling gift cards.",
    },
    {
      id: id++,
      title: "Easy Access",
      image: "assets/easy-access.png",
      link: "https://easyaccess.com.ng",
      tags: ['web dev'],
      description: "Easy Access is a platform that provides bills payment and subscription services. It aims to simplify the process of ",
    },
    {
      id: id++,
      title: "Angel's Pastries Services",
      image: "assets/angel.png",
      link: "",
      tags: ['Logo'],
      description: "Angel's Pastries Services is a bakery that specializes in cakes and pastries.",
    },
    {
      id: id++,
      title: "Tiptop Design Agency",
      image: "assets/tiptop.png",
      link: "https://tiptopdesign.netlify.app",
      tags: ['web dev', 'logo'],
      description: "Tiptop is a design agency that creates wonderful designs and strategies to grow businesses. This is a practice project.",
    },
    {
      id: id++,
      title: "React Image gallery",
      image: "assets/gallery.png",
      link: "https://isonguyom.github.io/drag-and-drop-gallery",
      tags: ['web dev'],
      description: "A simple drag and drop image gallery built with React with Auth0 authentication. This is a training task.",
    },
    {
      id: id++,
      title: "World Citizen",
      image: "assets/world-citizen.png",
      link: "https://worldcitizendotorg.netlify.app",
      tags: ['web dev', 'UI/UX design', 'logo'],
      description: "World Citizen is a non-profit organization that aims to promote cloth donation. This is training task.",
    },
    {
      id: id++,
      title: "JavaScript Quiz app",
      image: "assets/quiz-app.png",
      link: "https://isonguyom.github.io/quizAppJs",
      tags: ['web dev'],
      description: "A simple JavaScript quiz app that allows users to test their knowledge on various topics. This is a practice project.",
    },
    {
      id: id++,
      title: "Dummy Me",
      image: "assets/dummyme.png",
      link: "https://isonguyom.github.io/dummyMe",
      tags: ['web dev'],
      description: "This handy tool helps you create dummy text for all your layout needs. This is a practice project.",
    },
    {
      id: id++,
      title: "Vue Countdown Timer",
      image: "assets/countdown-timer.png",
      link: "https://isonguyom.github.io/countdown-timer",
      tags: ['web dev'],
      description: "A simple countdown timer built with Vue.js. This is a practice project.",
    },

  ]);
  return { projects };
});
