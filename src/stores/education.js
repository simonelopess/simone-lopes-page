import { defineStore } from 'pinia'

export const useEducationStore = defineStore('education', {
  state: () => [
    {
      id: 1,
      institution: 'FAETEC - Escola Técnica do Estado do Rio de Janeiro',
      course: 'Technical High School in Information System',
      period: 'Jan 2006 - Jun 2009',
      site_url: 'https://www.faetec.rj.gov.br',
      site_url_display: 'www.faetec.rj.gov.br',
    },
    {
      id: 2,
      institution: 'FEUC - Fundação Educacion Unificada Campograndense',
      course: 'Graduation in Information System',
      period: 'Jan 2013 - Jun 2017',
      site_url: 'https://www.feuc.br',
      site_url_display: 'www.feuc.br',
    },
    {
      id: 3,
      institution: 'PUC Minas - Pontifícia Universidade Católica Minas',
      course: 'Post Graduation - Web Development Full Stack',
      period: 'Aug 2020 - Abr 2022',
      site_url: 'https://www.pucminas.br',
      site_url_display: 'www.pucminas.br',
    },
  ],
  getters: {
    educationPayload() {
      return this.$state.map((education) => ({
        institution: education.institution,
        course: education.course,
        period: education.period,
        site_url: education.site_url,
        site_url_display: education.site_url_display,
      }))
    },
  },
})
