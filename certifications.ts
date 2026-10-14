export type Certification = {
  id: string
  organization: string
  name: string
  date?: string
  credential?: string
  skills?: string[]
  file?: string
}

export const certifications: Certification[] = [
  {
    id: 'microsoft-business-analysis',
    organization: 'Microsoft & LinkedIn Learning',
    name: 'Career Essentials in Business Analysis',
    date: 'Mar 29, 2025',
    credential: '7194 9625 0456 dbac',
    skills: ['Requirements Gathering', 'Project Management', 'Business Analysis'],
  },
  {
    id: 'google-foundations',
    organization: 'Google',
    name: 'Foundations: Data, Data, Everywhere',
  },
  {
    id: 'tata-genai',
    organization: 'TATA (via Forage)',
    name: 'GenAI-Powered Data Analytics Job Simulation',
    date: 'Jun – Jul 2025',
    credential: 'ryzBi9',
    skills: ['Exploratory Data Analysis', 'Risk Profiling', 'AI-Driven Collections Strategy'],
  },
  {
    id: 'deloitte-data-analytics',
    organization: 'Deloitte (via Forage)',
    name: 'Data Analytics Job Simulation',
    date: 'Jul 10, 2025',
    credential: 'uSWrDJ39HJoMtbqx2',
    skills: ['Data Analysis', 'Forensic Technology'],
  },
  {
    id: 'deloitte-technology',
    organization: 'Deloitte (via Forage)',
    name: 'Technology Job Simulation',
    date: 'Jul 13, 2025',
    credential: 'mLXcH7KqMbXfSixri',
    skills: ['Coding', 'Development'],
  },
  {
    id: 'deloitte-cyber',
    organization: 'Deloitte (via Forage)',
    name: 'Cyber Job Simulation',
    date: 'Jul 19, 2025',
    credential: 'N8ZXE6Cz2oSEspkR8',
    skills: ['Cyber Security'],
  },
  {
    id: 'tcs-young-professional',
    organization: 'TCS iON',
    name: 'Career Edge — Young Professional',
    date: 'Feb 27 – Apr 20, 2025',
    credential: '240640-27966064-1016',
    skills: ['Communication', 'Interview Skills', 'Business Etiquette', 'IT Foundational Skills'],
  },
  {
    id: 'skillup-powerbi',
    organization: 'SkillUp',
    name: 'Power BI for Beginners',
    date: 'Jun 1, 2025',
    credential: '8414708',
  },
]
