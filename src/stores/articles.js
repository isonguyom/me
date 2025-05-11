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
        "Frontend development is a technical skill that involves using various technical tools to create the interactive part of a website or web application.",
      published_date: "Jun 29, 2024",
      platform: platforms.value.dev,
    },
    {
      id: id++,
      title: "HOW TO BUILD A MEVN APP WITH VITE FRONTEND (PART 3)",
      poster: "assets/mevn-starter.png",
      link: "https://dev.to/isonguyom/how-to-build-a-mevn-app-with-vite-frontend-part-3-j9m",
      excerpt:
        "Congratulations! You have successfully developed your MEVN CRUD application, but we need to do some configuration to run it in a production environment.",
      published_date: "Aug 21, 2023",
      platform: platforms.value.dev,
    },
    {
      id: id++,
      title: "HOW TO BUILD A MEVN APP WITH VITE FRONTEND (PART 2)",
      poster: "assets/mevn-starter.png",
      link: "https://dev.to/isonguyom/how-to-build-a-mevn-app-with-vite-frontend-part-2-2lh8",
      excerpt:
        "We will use Vite build tool to create our frontend (client). To begin, make sure you're in the root directory mevn-crud and not the server folder.",
      published_date: "Aug 17, 2023",
      platform: platforms.value.dev,
    },
    {
      id: id++,
      title: "HOW TO BUILD A MEVN APP WITH VITE FRONTEND (PART 1)",
      poster: "assets/mevn-starter.png",
      link: "https://dev.to/isonguyom/mevn-257p",
      excerpt:
        "Full-stack web development describes the process of building the frontend and backend of a web application",
      published_date: "Aug 7, 2023",
      platform: platforms.value.dev,
    },
  ]);

  return { articles };
});
