import { ref } from "vue";
import { defineStore } from "pinia";

export const useArticlesStore = defineStore("articles", () => {
  let id = 0;

  const platforms = ref({
    dev: { name: "dev.to", link: "https://dev.to/isonguyom" },
  });

  const articles = ref([
    {
      id: id++,
      title: "The distinctions between React and Vue",
      poster: "assets/react-vs-vue.png",
      link: "https://dev.to/isonguyom/the-distinctions-between-react-and-vue-2b3i",
      excerpt:
        "Frontend development is a technical skill that involves using various technical tools to create the interactive part of a website or web application. A front-end developer achieves this by using languages like HTML, CSS, and JavaScript.",
      published_date: "Jun 29, 2024",
      platform: platforms.value.dev,
    },
    {
      id: id++,
      title: "HOW TO BUILD A MEVN APP WITH VITE FRONTEND (PART 3)",
      poster: "assets/mevn-starter.png",
      link: "https://dev.to/isonguyom/how-to-build-a-mevn-app-with-vite-frontend-part-3-j9m",
      excerpt:
        "You'll want to see your application live on the internet now that it's ready for deployment. There are a few platforms that provide free Node.js application deployment, but Render is one of the simplest to set up. Render is a unified cloud that allows you to build and host all of your apps and websites while offering free TLS certificates, a global CDN, DDoS protection, private networks, and Git auto deployments.",
      published_date: "Aug 21, 2023",
      platform: platforms.value.dev,
    },
    {
      id: id++,
      title: "HOW TO BUILD A MEVN APP WITH VITE FRONTEND (PART 2)",
      poster: "assets/mevn-starter.png",
      link: "https://dev.to/isonguyom/how-to-build-a-mevn-app-with-vite-frontend-part-2-2lh8",
      excerpt:
        "Notice that the Vite and Vue logos refused to load. This is because our server could not access the locations of the images. The next section will show you how to set up routes for your images and other assets. It is an optional section; you can ignore it and go to Building CRUD application frontend section.",
      published_date: "Aug 17, 2023",
      platform: platforms.value.dev,
    },
    {
      id: id++,
      title: "HOW TO BUILD A MEVN APP WITH VITE FRONTEND (PART 1)",
      poster: "assets/mevn-starter.png",
      link: "https://dev.to/isonguyom/mevn-257p",
      excerpt:
        "Full-stack web development describes the process of building the frontend and backend of a web application. It uses several technologies to accomplish this task; these technologies are collectively referred to as full-stack web development stack. There are several full-stack web development stacks, but we will be discussing the MEVN stack.",
      published_date: "Aug 7, 2023",
      platform: platforms.value.dev,
    },
  ]);

  return { articles };
});
