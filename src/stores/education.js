import { defineStore } from 'pinia'

export const useEducationStore = defineStore('education', {
  state: () => [
    {
      id: 1,
      institution: 'education.1.institution',
      course: 'education.1.course',
      period: 'education.1.period',
      site_url: 'education.1.site_url',
      site_url_display: 'education.1.site_url_display',
    },
    {
      id: 2,
      institution: 'education.2.institution',
      course: 'education.2.course',
      period: 'education.2.period',
      site_url: 'education.2.site_url',
      site_url_display: 'education.2.site_url_display',
    },
    {
      id: 3,
      institution: 'education.3.institution',
      course: 'education.3.course',
      period: 'education.3.period',
      site_url: 'education.3.site_url',
      site_url_display: 'education.3.site_url_display',
    },
    {
      id: 4,
      institution: 'education.4.institution',
      course: 'education.4.course',
      period: 'education.4.period',
      site_url: 'education.4.site_url',
      site_url_display: 'education.4.site_url_display',
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
