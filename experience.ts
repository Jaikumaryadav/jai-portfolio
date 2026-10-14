export type ExperienceEntry = {
  company: string
  role: string
  period: string
  achievements: string[]
  tech: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Future Interns',
    role: 'Data Science & Analytics Intern',
    period: 'June 2025 – July 2025',
    achievements: [
      'Engineered 3+ Power BI and Excel dashboards for real-time KPI monitoring, reducing manual reporting effort by 40%.',
      'Analyzed 50,000+ campaign records across CTR, engagement, and conversion metrics, identifying segments that contributed to a reported 25% improvement in campaign ROI.',
      'Built a Python NLP sentiment analysis pipeline on 1,200+ customer responses, achieving 85% classification accuracy.',
      'Designed ETL workflows to extract, clean, and transform multi-source data, cutting data preparation time by 30%.',
    ],
    tech: ['Python', 'SQL', 'NLP', 'ETL', 'Data Analytics', 'Power BI'],
  },
]
