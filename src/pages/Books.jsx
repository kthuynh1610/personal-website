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

export default function Books() {
  return (
    <div className="books-page">
      <h1>Books</h1>
      <hr />

      <ul className="book-list">
        {books.map((book) => (
          <li key={book.title}>
            <span className="book-title">
              {book.title} - {book.author} ({book.year})
            </span>
            <p className="book-summary">{book.summary}</p>
            <p className="book-takeaway">{book.takeaway}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
