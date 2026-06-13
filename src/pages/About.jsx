import aboutPhoto from '../assets/IMG_4665.jpg'

export default function About() {
  return (
    <div className="about-page">
      <div className="about-title-row">
        <img src={aboutPhoto} alt="Tu Huynh" className="about-title-image" />
        <h1>About</h1>
      </div>
      <hr />

      <p>
        Over the past ~3 years, I've worked on distributed systems at Kmart, Change Beetle, and Adiva. I'm currently on the Availability team at Kmart, where we handle stock, regional availability, reservations, and fulfillment at scale. I work primarily with TypeScript, Node.js, React, and AWS, etc.
      </p>

      <p>
          · AWS Certified Cloud Practitioner and Solutions Architect Associate.
        <br />
          · Bachelor of IT from Deakin University (2019–2022), distinction average final year project.
      </p>

      <p>Email: <a href="mailto:ktuhuy1610@gmail.com">ktuhuy1610@gmail.com</a></p>

      <hr />

      <h2>Things I'm working on</h2>
      <ul className="interest-list">
        <li>
          <strong>Stash</strong> — a map curation app for discovering local spots,
          built solo. <a href="https://stashmap.me" target="_blank" rel="noreferrer">stashmap.me</a>
        </li>
        <li>
          <strong>Kmart Availability system</strong> — stock on hand, regional availability, reservation,
          and fulfillment infrastructure at scale.
        </li>
        <li>
          <strong>Popup cafe</strong> — exploring a cafe concept in Melbourne,
          leveraging an existing coffee and baking business.
        </li>
      </ul>

      <hr />

      <h2>Things I'm interested in</h2>
      <ul className="interest-list">
        <li><strong>Distributed systems.</strong> How things break at scale and why.</li>
        <li><strong>Books.</strong> A Song of Ice and Fire, at the moment.</li>
        <li><strong>Investing.</strong> ETFs, crypto, long-term compounding, boring and correct.</li>
        <li><strong>Coffee.</strong> Seriously.</li>
      </ul>
    </div>
  )
}
