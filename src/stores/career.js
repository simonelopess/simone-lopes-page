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
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'FIRJAN - Federação de Indústrias do Estado do Rio e Janeiro',
      period: 'Jan 2019 - Jun 2020',
      local: 'Rio de Janeiro, Brazil',
      contract: 'Full-time',
      description:
        'As a Frontend Developer, I have contributed to projects leveraging technologies such as React, React Native, and Angular for industry-leading partner companies. My role focused on creating innovative solutions to drive industrial growth, including developing a platform to manage smart equipment. During the pandemic, I participated in a project that enabled real-time blood oxygen monitoring of employees using smartwatches, accessible through a dashboard powered by APIs. I specialize in building mobile and web solutions, integrating with Node.js backends, and collaborating in agile environments using Scrum methodologies.',
      tools: ['react', 'typescript', 'github', 'javascript'],
    },
    {
      id: 4,
      role: 'IT Support Specialist',
      company: 'FIRJAN - Federação de Indústrias do Estado do Rio e Janeiro',
      period: 'Jan 2011 - Jan 2019',
      local: 'Rio de Janeiro, Brazil',
      contract: 'Full-time',
      description:
        'Provided assistance and resolved issues related to hardware, software, and networks, offering both remote and on-site support to employees. Installed, configured, and maintained computers, printers, and other peripherals, ensuring proper functionality of all IT equipment.',
      tools: [''],
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
