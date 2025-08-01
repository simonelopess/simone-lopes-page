import { defineStore } from 'pinia'

export const useCareerStore = defineStore('career', {
  state: () => [
    {
      id: 1,
      role: 'career.1.role',
      company: 'career.1.company',
      period: 'career.1.period',
      local: 'career.1.local',
      contract: 'career.1.contract',
      description: 'career.1.description',
      tools: [
        'career.1.tools.0',
        'career.1.tools.1',
        'career.1.tools.2',
        'career.1.tools.3',
        'career.1.tools.4',
        'career.1.tools.5',
        'career.1.tools.6',
        'career.1.tools.7',
      ],
    },
    {
      id: 2,
      role: 'career.2.role',
      company: 'career.2.company',
      period: 'career.2.period',
      local: 'career.2.local',
      contract: 'career.2.contract',
      description: 'career.2.description',
      tools: [
        'career.2.tools.0',
        'career.2.tools.1',
        'career.2.tools.2',
        'career.2.tools.3',
        'career.2.tools.4',
        'career.2.tools.5',
        'career.2.tools.6',
        'career.2.tools.7',
      ],
    },
    {
      id: 3,
      role: 'career.3.role',
      company: 'career.3.company',
      period: 'career.3.period',
      local: 'career.3.local',
      contract: 'career.3.contract',
      description: 'career.3.description',
      tools: [
        'career.1.tools.0',
        'career.1.tools.1',
        'career.1.tools.2',
        'career.1.tools.3',
        'career.1.tools.4',
        'career.1.tools.5',
        'career.1.tools.6',
        'career.1.tools.7',
      ],
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
