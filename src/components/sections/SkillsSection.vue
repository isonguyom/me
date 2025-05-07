<template>
    <section id="skills" class="h-screen flex items-center justify-center bg-background px-6 md:px-12 relative">
      <SectionTitle title="Skills" subtitle="What I Can Do" />
      <div class="w-full h-full py-10 max-w-5xl mx-auto">
 
 <div class="w-full h-full overflow-y-auto">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-text font-dm text-lg">
          <div v-for="skill in skills" :key="skill" class="p-4 border border-primary/20 rounded hover:bg-primary/5 transition">
            {{ skill }}
          </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import SectionTitle from '@/components/SectionTitle.vue';
  const skills = [
    // Frontend
    'Vue.js',
    'React',
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Responsive Design',
    'SPAs',
  
    // UI/UX & Design
    'Component Architecture',
    'Modern Layouts',
    'Design Systems',
  
    // Tooling & Workflow
    'Vite',
    'Webpack',
    'NPM / PNPM',
    'Git & GitHub',
    'VS Code',
    'ESLint & Prettier',
  
    // Domain Focus
    'Maritime Digitalization',
    'Marine Engineering Insight',
    'Data-driven Solutions',
  
    // Soft Skills
    'Problem Solving',
    'Team Collaboration',
    'Creativity',
    'Continuous Learning'
  ];
  </script>
  
  <style scoped>
  /* optional: add custom animation if you want */
  </style>
  