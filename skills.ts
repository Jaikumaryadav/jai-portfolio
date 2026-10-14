export type SkillCategory = {
  id: string
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core languages used for analysis, automation and data engineering.',
    skills: ['Python', 'SQL', 'R', 'C'],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Statistical and exploratory methods used to find and validate insight.',
    skills: ['EDA', 'Statistics', 'A/B Testing', 'NLP', 'Regression'],
  },
  {
    id: 'visualization',
    title: 'Visualization',
    description: 'Tools used to design dashboards and communicate findings.',
    skills: ['Power BI', 'Excel', 'Dashboard Design', 'Data Storytelling'],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Version control, warehousing and statistical software behind the work.',
    skills: ['Git', 'GitHub', 'PostgreSQL', 'SPSS'],
  },
]

export const libraries = ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'NLTK', 'TextBlob']
