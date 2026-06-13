const projects = [
  {
    name: 'Stash',
    url: 'https://stashmap.me',
    desc: 'A map curation app for discovering and saving local spots. Built solo, targeting Vietnamese users and expats in Melbourne.',
    meta: 'Expo · NestJS · PostgreSQL · PostGIS · Railway · Vercel',
    status: 'active',
  },
  {
    name: 'OMFP — Regional Availability',
    url: null,
    desc: 'Event-driven inventory pipeline serving 300+ Kmart stores, processing millions of records per day.',
    meta: 'Lambda · Kafka · DynamoDB · CDK',
    status: 'active',
  },
  {
    name: 'OMFP — Proxy & Rollout',
    url: null,
    desc: 'Configurable allowlist rollout mechanism enabling gradual store, state, and country-level traffic migration to the new fulfillment platform.',
    meta: 'NestJS · TypeScript',
    status: 'active',
  },
  {
    name: 'SMS Reminder',
    url: null,
    desc: 'End-to-end SMS notification system for order fulfillment events.',
    meta: 'Lambda · SQS · SNS · DynamoDB',
    status: 'shipped',
  },
  {
    name: 'Stock Reservation',
    url: null,
    desc: 'Checkout journey integration for real-time stock reservation across the Kmart platform.',
    meta: 'GraphQL · Commercetools · ECS',
    status: 'shipped',
  },
  {
    name: 'Wind Turbine Planner',
    url: null,
    desc: 'Geospatial planning tool that won the Victorian Government Low Carbon Manufacturing Grant.',
    meta: 'React · ArcGIS · OpenAI · Terraform',
    status: 'shipped',
  },
  {
    name: 'AI Chatbot',
    url: null,
    desc: 'In-app assistant powered by GPT-4o to help users navigate software. Received positive user feedback on launch.',
    meta: 'OpenAI API',
    status: 'shipped',
  },
  {
    name: 'Adiva Check-in & Feedback',
    url: null,
    desc: 'Full single-page application for customer check-in and feedback at Adiva.',
    meta: 'React · S3 · CloudFront · Lambda',
    status: 'shipped',
  },
  {
    name: 'Adiva Company Website',
    url: null,
    desc: 'WordPress site on AWS with auto-scaling and CDN distribution.',
    meta: 'EC2 · CloudFront · ACM · Load Balancer',
    status: 'shipped',
  },
  {
    name: 'M Cabinet Design',
    url: null,
    desc: 'Marketing website for a cabinet design business. Custom domain, Firebase hosting.',
    meta: 'React · MUI · Firebase',
    status: 'shipped',
  },
]

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <hr />

      <ul className="project-list">
        {projects.map((p) => (
          <li key={p.name}>
            <span className="project-name">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
              ) : (
                p.name
              )}
            </span>
            <span className="project-desc">{p.desc}</span>
            <span className="project-meta">{p.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
