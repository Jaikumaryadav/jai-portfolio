export type DaxMeasure = { name: string; code: string }

export type Project = {
  id: string
  title: string
  description: string
  image: string
  images: string[]
  technologies: string[]
  category: string[]
  github: string
  downloadable: boolean
  kpis?: string[]
  businessQuestions?: { question: string; output: string }[]
  dashboardPages?: string[]
  dataPipeline?: string[]
  dataModel?: string[]
  keyInsights?: string[]
  dax?: DaxMeasure[]
  documentedValues?: { label: string; value: string; note?: string }[]
}

export const projects: Project[] = [
  {
    id: 'retail-intelligence',
    title: 'Retail Sales & Profit Intelligence System',
    description:
      'An end-to-end retail analytics platform that processes transactional data through a Python ETL pipeline, a PostgreSQL star-schema warehouse, 16 SQL business queries, Prophet forecasting and a 4-page Power BI dashboard.',
    image: '/dashboard-retail.png',
    images: ['/dashboard-retail.png'],
    technologies: ['Python', 'Pandas', 'NumPy', 'PostgreSQL', 'SQL', 'Power BI', 'Prophet', 'ETL', 'Git', 'GitHub'],
    category: ['Power BI', 'Python', 'SQL', 'ETL'],
    github: 'https://github.com/Jaikumaryadav/Retail-sales-intelligence',
    downloadable: true,
    dashboardPages: ['Executive Overview', 'Regional Analysis', 'Product Performance', 'Sales Trends & Forecasting'],
    dataPipeline: [
      'Raw CSV (~9,994 records)',
      'Python ETL — dedup, null handling, date parsing, feature engineering',
      'Cleaned dataset',
      'PostgreSQL star schema (dim_customers, dim_products, dim_date, dim_ship_mode, fact_sales, agg_monthly_sales)',
      '16 SQL business queries',
      'Prophet forecasting — 6-month horizon, 95% CI',
      'Power BI dashboard (4 pages)',
    ],
    dataModel: ['dim_customers', 'dim_products', 'dim_date', 'dim_ship_mode', 'fact_sales', 'agg_monthly_sales'],
    businessQuestions: [
      { question: 'Which regions, states, and segments drive the most revenue?', output: 'Regional Analysis page' },
      { question: 'Which products are profitable vs. destroying margin?', output: 'Product Performance page' },
      { question: 'How does repeat rate and customer LTV vary by segment?', output: 'SQL queries Q05, Q08' },
      { question: 'What is the YoY and QoQ growth trajectory?', output: 'SQL queries Q06, Q14' },
      { question: 'What does revenue look like for the next 6 months?', output: 'Prophet forecast' },
      { question: 'Do heavy discounts correlate with profit losses?', output: 'SQL query Q10, scatter chart' },
    ],
    keyInsights: [
      'West region generates the highest revenue; Central has the lowest profit margin',
      'Technology category delivers the best margins; Furniture drags profitability',
      'Orders with >30% discount are loss-making in 68% of cases',
      'Repeat customer rate is 85%+ across all segments',
      'Q4 seasonal spike: November–December revenue runs 2.3× the monthly average',
    ],
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-commerce Sales Performance Dashboard',
    description:
      'An interactive sales and revenue analytics dashboard evaluating multi-channel retail performance, profitability metrics, and regional customer purchasing patterns.',
    image: '/dashboard-task1.png',
    images: ['/dashboard-task1.png'],
    technologies: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'Data Modeling'],
    category: ['Power BI', 'DAX', 'Analytics'],
    github: 'https://github.com/Jaikumaryadav/FUTURE-INTERNS_DS-A',
    downloadable: true,
    kpis: ['Total Sales & Net Revenue', 'Profit Margin %', 'Average Order Value (AOV)', 'Return Rate %'],
    dax: [
      { name: 'Total Sales', code: "Total Sales = SUM('Sales'[Sales_Amount])" },
      {
        name: 'Profit Margin %',
        code:
          "Profit Margin % = \nDIVIDE(\n    [Total Sales] - SUM('Sales'[Cost_Amount]),\n    [Total Sales],\n    0\n)",
      },
    ],
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Ad Campaign Analytics Dashboard',
    description:
      'A digital marketing intelligence dashboard measuring paid media efficiency, audience reach, conversion funnels, and Return on Ad Spend across social advertising channels.',
    image: '/dashboard-task2.png',
    images: ['/dashboard-task2.png'],
    technologies: ['Power BI', 'DAX', 'Marketing Analytics', 'Data Visualization'],
    category: ['Power BI', 'DAX', 'Analytics'],
    github: 'https://github.com/Jaikumaryadav/FUTURE-INTERNS_DS-A',
    downloadable: true,
    kpis: ['Total Ad Spend & Impressions', 'Click-Through Rate (CTR %) & CPC', 'Conversion Rate %', 'Return on Ad Spend (ROAS)'],
    dax: [
      {
        name: 'Click-Through Rate (CTR %)',
        code: "CTR % = \nDIVIDE(\n    SUM('Ad_Performance'[Clicks]),\n    SUM('Ad_Performance'[Impressions]),\n    0\n)",
      },
      {
        name: 'Return on Ad Spend (ROAS)',
        code:
          "ROAS = \nDIVIDE(\n    SUM('Ad_Performance'[Conversion_Value]),\n    SUM('Ad_Performance'[Spend]),\n    0\n)",
      },
    ],
  },
  {
    id: 'student-feedback',
    title: 'Student Feedback & Academic Performance Dashboard',
    description:
      'An institutional performance dashboard analyzing student satisfaction scores, faculty evaluation ratings, syllabus clarity, and campus resource feedback across departments.',
    image: '/dashboard-task3.png',
    images: ['/dashboard-task3.png'],
    technologies: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'Data Modeling'],
    category: ['Power BI', 'DAX', 'Analytics'],
    github: 'https://github.com/Jaikumaryadav/FUTURE-INTERNS_DS-A',
    downloadable: true,
    kpis: ['Total Responses', 'Average Overall Satisfaction', 'Teaching Quality & Faculty Benchmark', 'Infrastructure Rating'],
    dax: [
      { name: 'Average Rating', code: "Average Rating = AVERAGE('Student_Feedback'[Overall_Rating])" },
      {
        name: 'Positive Feedback % (rating ≥ 4)',
        code:
          "Positive Feedback % = \nDIVIDE(\n    CALCULATE(COUNTROWS('Student_Feedback'), 'Student_Feedback'[Overall_Rating] >= 4),\n    COUNTROWS('Student_Feedback'),\n    0\n)",
      },
    ],
  },
  {
    id: 'retail-risk',
    title: 'Retail Executive Performance & Risk Analytics Dashboard',
    description:
      'An executive-grade Power BI dashboard evaluating multi-channel sales performance, profitability trends, product category contributions, and operational risk across inventory and returns.',
    image: '/dashboard-insight360.png',
    images: ['/dashboard-insight360.png'],
    technologies: ['Power BI', 'DAX', 'Retail Analytics', 'Risk Analytics'],
    category: ['Power BI', 'DAX', 'Analytics'],
    github: 'https://github.com/Jaikumaryadav/Insight360-BI-Platform',
    downloadable: true,
    kpis: ['Total Net Sales', 'Net Revenue', 'Total Return Amount', 'Profit Margin %', 'Return Rate %', 'Stockout Rate %'],
    documentedValues: [
      { label: 'Total Net Sales', value: '$70.26B' },
      { label: 'Net Revenue', value: '$69.32B' },
      { label: 'Total Return Amount', value: '$934.65M' },
      { label: 'Profit Margin', value: '29.40%', note: 'Target: 30.00%' },
      { label: 'Return Rate', value: '1.54%', note: 'Threshold: < 2.00%' },
      { label: 'Stockout Rate', value: '4.33%' },
    ],
    keyInsights: [
      'Product returns total $934.65M — a 1.54% global return rate, staying below the 2.00% risk ceiling',
      'Stockout rate held at 4.33%, with drill-downs identifying specific regional bottlenecks',
      'Profit margin of 29.40% tracked against a 30.00% benchmark',
    ],
    dax: [
      {
        name: 'Profit Margin %',
        code:
          "Profit Margin % = \nDIVIDE(\n    [Total Net Sales] - SUM('fact_sales'[cost_amount]),\n    [Total Net Sales],\n    0\n)",
      },
      {
        name: 'Return Rate %',
        code: "Return Rate % = \nDIVIDE(\n    [Total Return Amount],\n    [Total Net Sales],\n    0\n)",
      },
    ],
  },
]

export const projectFilters = ['All', 'Power BI', 'Python', 'SQL', 'ETL', 'DAX', 'Analytics']
