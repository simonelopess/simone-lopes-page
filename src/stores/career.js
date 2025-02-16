import { defineStore } from 'pinia'

export const useCareerStore = defineStore('career', {
  state: () => [
    {
      id: 1,
      role: 'Frontend Developer',
      company: 'Noesis - @NOS SPGS',
      period: 'Jul 2023 - Present',
      local: 'Lisbon, Portugal',
      contract: 'Full-time',
      description:
        'Currently working as a Frontend Developer, migrating between technologies daily and contributing to various internal projects. I collaborate with a UX/UI team for the NOS client, focusing on delivering high-quality solutions. At present, I am working on an internal application core for NOS products using AngularJS. Additionally, I contribute to the development of mobile and web applications for NOS cinemas, ensuring seamless user experiences.',
      tools: ['react', 'typescript', 'confluence', 'jira', 'storybook', 'vite', 'next', 'angular'],
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'CI&T',
      period: 'Jun 2021 - Oct 2022',
      local: 'Campinas, Brazil',
      contract: 'Full-time',
      description:
        'Frontend Developer with extensive experience in modernizing and optimizing web applications. Contributed to the transformation and performance improvement of the Cartão Elo website, implementing a new company design system using tools like Storybook and Z-Height. Developed and enhanced features to ensure high performance and seamless user experiences. Worked with a BFF (Backend for Frontend) architecture to integrate backend services, utilizing technologies like React, Next.js, Node.js, and Styled Components. Proficient in content management with Strapi and Contentful, and experienced in deploying solutions in AWS environments. Skilled in agile methodologies, including Scrum, and focused on delivering scalable, high-quality solutions.',
      tools: ['react', 'redux', 'typescript', 'github', 'javascript', 'node', 'storybook', 'jest'],
    },
  ],
  getters: {
    careerPayload() {
      return this.$state.map((career) => ({
        role: career.role,
        company: career.company,
        period: career.period,
        contract: career.contract,
        description: career.description,
        tools: career.tools,
      }))
    },
  },
})
