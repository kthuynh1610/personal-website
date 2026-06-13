const projects = [
  {
    name: 'Stash',
    url: 'https://stashmap.me',
    desc: 'A map curation app for discovering and saving local spots. Built solo, targeting Vietnamese users and expats in Melbourne.',
    meta: 'Expo · NestJS · PostgreSQL · PostGIS · Railway · Vercel',
    status: 'active',
  },
  {
    name: 'Kmart',
    url: null,
    desc: 'Selected fulfillment and availability work across the Kmart platform.',
    highlights: [
      {
        title: 'OMFP — Regional Availability',
        desc: 'Event-driven inventory pipeline serving 300+ Kmart stores, processing millions of records per day.',
        meta: 'Lambda · Kafka · DynamoDB · SQS · SNS · CDK · TypeScript',
      },
      {
        title: 'OMFP — Proxy & Rollout',
        desc: 'Configurable allowlist rollout mechanism enabling gradual store, state, and country-level traffic migration to the new fulfillment platform.',
        meta: 'NestJS · TypeScript · AWS Parameter Store',
      },
      {
        title: 'SMS Reminder',
        desc: 'End-to-end SMS notification system for order fulfillment events.',
        meta: 'Lambda · SQS · SNS · DynamoDB · TypeScript',
      },
      {
        title: 'Stock Reservation',
        desc: 'Checkout journey integration for real-time stock reservation across the Kmart platform.',
        meta: 'GraphQL · Commercetools · ECS · TypeScript · NextJS',
      },
    ],
    status: 'shipped',
  },
  {
    name: 'Change Beetle',
    url: null,
    desc: 'A wind turbine planning tool that won the Victorian Government Low Carbon Manufacturing Grant.',
    meta: 'React · ArcGIS · OpenAI · Terraform · AWS · PostgreSQL · Firebase ',
    status: 'shipped',
    highlights: [
      {
        title: 'AI Chatbot',
        desc: 'In-app assistant powered by GPT-4o to help users navigate software. Received positive user feedback on launch.',
        meta: 'OpenAI API',
      }
    ]
  },
  {
    name: 'Adiva Nails & Beauty',
    url: 'https://www.adivabeauty.com.au/',
    desc: 'Digital product and platform work delivered across Adiva properties.',
    highlights: [
      {
        title: 'Adiva Check-in & Feedback',
        desc: 'Full single-page application for customer check-in and feedback at Adiva.',
        meta: 'React · S3 · CloudFront · Lambda',
      },
      {
        title: 'Adiva Website',
        desc: 'WordPress site on AWS with auto-scaling and CDN distribution.',
        meta: 'EC2 · CloudFront · ACM · Load Balancer',
      },
    ],
    status: 'shipped',
  },
  {
    name: 'M Cabinet Design',
    url: 'https://mcabinetdesign.com.au',
    desc: 'Marketing website for a cabinet design business. Custom domain, Firebase hosting.',
    meta: 'React · MUI · Firebase',
    status: 'shipped',
  },
]

export default function Projects() {
  return (
    <div className="projects-page">
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

            {p.highlights ? (
              <ul className="project-sublist">
                {p.highlights.map((item) => (
                  <li key={item.title}>
                    <span className="project-subname">- {item.title}</span>
                    <span className="project-subdesc">{item.desc}</span>
                    <span className="project-submeta">{item.meta}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
