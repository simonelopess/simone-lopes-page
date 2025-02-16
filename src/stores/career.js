import { defineStore } from 'pinia'

export const useCareerStore = defineStore('career', {
  state: () => [
    {
      role: 'Software Engineer',
      company: 'Google',
      period: 'Jan 2020 - Present',
      local: 'Rio de Janeiro, Brazil',
      contract: 'Full-time',
      description: 'I worked on the Google search engine',
    },
    {
      role: 'Software Engineer',
      company: 'Google',
      period: '2 years',
      local: 'Mountain View, CA',
      contract: 'Full-time',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
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
      }))
    },
  },
})
