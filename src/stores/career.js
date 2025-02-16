import { defineStore } from 'pinia'

export const useCareerStore = defineStore('career', {
  state: () => [
    {
      role: 'Software Engineer',
      company: 'Google',
      period: '2 years',
      contract: 'Full-time',
      description: 'I worked on the Google search engine',
    },
    {
      role: 'Software Engineer',
      company: 'Google',
      period: '2 years',
      contract: 'Full-time',
      description: 'I worked on the Google search engine',
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
