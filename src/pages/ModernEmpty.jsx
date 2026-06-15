import { useEffect, useState } from 'react'
import aboutPhoto from '../assets/IMG_4665.jpg'
import cvFile from '../assets/KT-CV-05052026.pdf'

const projects = [
  {
    name: 'Stash',
    url: 'https://stashmap.me',
    desc: 'A map curation app to discover, save, and share local spots. Built solo for Vietnamese users and expats in Melbourne.',
    meta: 'Expo · NestJS · PostgreSQL · PostGIS · Railway · Vercel · Claude 4.x · Vibe Coding',
  },
  {
    name: 'Kmart Australia Ltd',
    desc: 'Selected fulfillment and availability initiatives delivered across the Kmart platform.',
    highlights: [
      {
        title: 'OMFP - Regional Availability',
        desc: 'Event-driven inventory pipeline serving 300+ stores and processing millions of records daily.',
        meta: 'Lambda · Kafka · DynamoDB · SQS · SNS · CDK · TypeScript',
      },
      {
        title: 'OMFP - Proxy & Rollout',
        desc: 'Configurable allowlist rollout enabling gradual migration by store, state, and country to the new fulfillment platform.',
        meta: 'NestJS · TypeScript · AWS Parameter Store',
      },
      {
        title: 'SMS Reminder',
        desc: 'End-to-end SMS notification workflow for key order fulfillment events.',
        meta: 'Lambda · SQS · SNS · DynamoDB · TypeScript',
      },
      {
        title: 'Stock Reservation',
        desc: 'Checkout integration for real-time stock reservation across Kmart channels.',
        meta: 'GraphQL · Commercetools · ECS · TypeScript · NextJS',
      },
    ],
  },
  {
    name: 'Change Beetle Ltd',
    desc: 'Built a wind turbine planning product that helped secure the Victorian Government Low Carbon Manufacturing Grant.',
    meta: 'React · ArcGIS · OpenAI · Terraform · AWS · PostgreSQL · Firebase',
    highlights: [
      {
        title: 'AI Chatbot',
        desc: 'In-app GPT-4o assistant to guide users through workflows, with strong feedback at launch.',
        meta: 'OpenAI API',
      },
    ],
  },
  {
    name: 'Adiva Nails & Beauty',
    url: 'https://www.adivabeauty.com.au/',
    desc: 'Digital product and platform work across Adiva customer-facing properties.',
    highlights: [
      {
        title: 'Adiva Check-in & Feedback',
        desc: 'Single-page application for in-store customer check-in and feedback collection.',
        meta: 'React · S3 · CloudFront · Lambda',
      },
      {
        title: 'Adiva Website',
        desc: 'WordPress site on AWS with auto-scaling capacity and CDN delivery.',
        meta: 'EC2 · CloudFront · ACM · Load Balancer',
      },
    ],
  },
  {
    name: 'M Cabinet Design',
    url: 'https://mcabinetdesign.com.au',
    desc: 'Marketing site for a cabinet design business with custom domain setup and Firebase hosting.',
    meta: 'React · MUI · Firebase',
  },
]

const books = [
  {
    title: 'Currency Wars',
    author: 'Song Hongbing',
    year: '5-part series, 2007-ongoing',
    summary: 'This series reads like a thriller about money and power. Song Hongbing argues that major world events, from the 1929 crash to WWII, were shaped by banking elites using monetary systems as strategic tools. Whether you agree with him or not, he makes you pay attention to who controls liquidity, debt, and confidence.',
    takeaway: 'I treat the conspiracy parts carefully, but the book still helped me see how central banking, reserve currency dynamics, and policy signaling can move entire economies. Part 5 is especially interesting for the US-China lens.',
  },
  {
    title: 'Flow',
    author: 'Mihaly Csikszentmihalyi',
    year: '1990',
    summary: 'Flow explains that peak focus is not random, it is designed. You enter flow when goals are clear, feedback is immediate, and the challenge is just above your current skill. In that state, time compresses, noise disappears, and your work quality usually jumps.',
    takeaway: 'This one changed how I structure deep work sessions. The work-vs-leisure data is still counterintuitive (54% vs 18%), but it matches real life: meaningful challenge often feels better than passive downtime.',
  },
  {
    title: 'The Laws of Consciousness',
    author: 'Ozie Cargile & Charles Hopkins',
    year: '2020',
    summary: 'This book tries to build a bridge between spiritual questions and scientific language. It explores perception, will, certainty, and differentiation as core laws that shape how we experience reality. The writing is layered and recursive, so ideas return in cycles instead of a straight line.',
    takeaway: 'It is a dense read, but worth it if you are into consciousness and meaning. I would not call it beginner-friendly, but if you are patient, it gives you a framework that is more structured than most mind-body books.',
  },
  {
    title: 'Fire & Blood (House of the Dragon source)',
    author: 'George R. R. Martin',
    year: '2018',
    summary: 'Unlike the main novels, this reads like a royal chronicle with conflicting accounts and political bias baked in. The Dance of the Dragons section is basically a slow-motion succession disaster where pride, legitimacy, and family rivalry collapse into civil war.',
    takeaway: 'If you like political strategy and historical texture, this is excellent. It is less emotionally intimate than the TV show, but much better for understanding the long-game motives behind each faction.',
  },
]

const stack = [
  { category: 'Languages', items: 'TypeScript · JavaScript · Bash' },
  { category: 'Frontend', items: 'React · Next.js · Redux Toolkit · Tailwind · MUI' },
  { category: 'Backend', items: 'Node.js · NestJS · GraphQL · REST · Redis · Kafka' },
  { category: 'Cloud', items: 'AWS - Lambda · DynamoDB · S3 · SQS · SNS · ECS · CDK · CloudFront · Route 53' },
  { category: 'AI', items: 'OpenAI API · Claude · DeepSeek' },
  { category: 'DevOps', items: 'GitHub Actions · BuildKite · Terraform · CloudFormation · AWS CDK' },
  { category: 'Monitoring', items: 'New Relic · CloudWatch · Raygun' },
]

function renderTechPills(meta) {
  if (!meta) {
    return null
  }

  const technologies = meta.split('·').map((item) => item.trim()).filter(Boolean)

  return (
    <div className="modern-tech-list">
      {technologies.map((tech) => (
        <span key={tech} className="modern-tech-pill">{tech}</span>
      ))}
    </div>
  )
}

export default function ModernEmpty() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const orderedSections = ['projects', 'books', 'stack', 'now']

    function updateActiveSection() {
      const scrollMarker = window.scrollY + 140
      let current = 'about'

      for (const id of orderedSections) {
        const el = document.getElementById(id)
        if (el && scrollMarker >= el.offsetTop) {
          current = id
        }
      }

      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <main id="top" className="modern-page" aria-label="Modern single-page portfolio">
      <aside className="modern-sidebar">
        <img src={aboutPhoto} alt="Tu Huynh" className="modern-avatar" />
        <h1 className="modern-name">Tu Huynh</h1>
        <p className="modern-role">Software Engineer</p>

        <nav className="modern-sidebar-nav" aria-label="Modern page sections">
          <a href="#top" className={activeSection === 'about' ? 'is-active' : 'is-inactive'}>About</a>
          <a href="#projects" className={activeSection === 'projects' ? 'is-active' : 'is-inactive'}>Projects</a>
          <a href="#books" className={activeSection === 'books' ? 'is-active' : 'is-inactive'}>Books</a>
          <a href="#stack" className={activeSection === 'stack' ? 'is-active' : 'is-inactive'}>Stack</a>
          <a href="#now" className={activeSection === 'now' ? 'is-active' : 'is-inactive'}>Now</a>
        </nav>

        <div className="modern-sidebar-download">
          <a href={cvFile} download="KT-CV-05052026.pdf" className="modern-sidebar-cv">View my full résumé</a>
        </div>
      </aside>

      <section className="modern-content">
        <section className="modern-section" id="about">
          <h2>About</h2>
          <div className="modern-about-box">
            <p>
              Over the past ~3 years, I've worked on distributed systems at Kmart, Change Beetle, and Adiva. I'm currently on the Availability team at Kmart, where we handle stock, regional availability, reservations, and fulfillment at scale. I work primarily with TypeScript, Node.js, React, and AWS, etc.
            </p>
            <p>
              · AWS Certified Cloud Practitioner and Solutions Architect Associate.
              <br />
              · Bachelor of IT from Deakin University (2019-2022), distinction average final year project.
            </p>
            <p>Email: ktuhuy1610@gmail.com</p>
          </div>

          <div className="modern-about-box">
            <h3>Things I'm working on</h3>
            <p>
              Stash - a map curation app for discovering local spots, built solo. stashmap.me
            </p>
            <p>
              Kmart Availability system - stock on hand, regional availability, reservation, and fulfillment infrastructure at scale.
            </p>
            <p>
              Popup cafe - exploring a cafe concept in Melbourne, leveraging an existing coffee and baking business.
            </p>

            <h3>Things I'm interested in</h3>
            <p>Distributed systems. How things break at scale and why.</p>
            <p>Books. A Song of Ice and Fire, at the moment.</p>
            <p>Investing. ETFs, crypto, long-term compounding, boring and correct.</p>
            <p>Coffee. Seriously.</p>
          </div>
        </section>

        <section className="modern-section projects-page" id="projects">
          <h2>Projects</h2>
          <ul className="project-list modern-project-list">
            {projects.map((project) => (
              <li key={project.name} className="modern-project-item">
                <span className="project-name">
                  {project.url ? (
                    <span className="modern-project-title-row">
                      <a className="modern-project-link" href={project.url} target="_blank" rel="noreferrer">{project.name}</a>
                      <a
                        className="modern-project-open"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name}`}
                        title="Open link"
                      >
                        ↗
                      </a>
                    </span>
                  ) : (
                    project.name
                  )}
                </span>
                <span className="project-desc">{project.desc}</span>
                {renderTechPills(project.meta)}

                {project.highlights ? (
                  <ul className="project-sublist modern-project-sublist">
                    {project.highlights.map((item) => (
                      <li key={item.title} className="modern-project-subitem">
                        <span className="project-subname">- {item.title}</span>
                        <span className="project-subdesc">{item.desc}</span>
                        {renderTechPills(item.meta)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="modern-section books-page" id="books">
          <h2>Books</h2>
          <ul className="book-list modern-book-list">
            {books.map((book) => (
              <li key={book.title} className="modern-book-item">
                <span className="book-title">
                  {book.title} - {book.author} ({book.year})
                </span>
                <p className="book-summary">{book.summary}</p>
                <p className="book-takeaway">{book.takeaway}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="modern-section" id="stack">
          <h2>Stack</h2>
          <div className="modern-about-box">
            <ul className="stack-list">
              {stack.map((item) => (
                <li key={item.category}>
                  <strong>{item.category}</strong>
                  <span className="stack-items">{item.items}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="modern-section" id="now">
          <h2>Now</h2>
          <div className="modern-about-box">
            <p>Updated June 2025. Melbourne, Australia.</p>
            <ul className="interest-list">
              <li>
                I came up with the idea for some new side projects that helps me learn and manage my investments. More details coming soon.
              </li>
              <li>
                Working on Availability system at Kmart - CDK infrastructure,
                S3 cross-stack sharing, and proxy filtering logic.
              </li>
              <li>
                Exploring a popup cafe concept in Melbourne.
              </li>
              <li>
                Reading House of the Dragon.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  )
}
