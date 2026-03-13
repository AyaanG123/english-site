import { useState } from 'react';

function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "Remember, every treasure comes with a price.",
      author: "Kevin Kwan (Author)",
    },
    {
      text: "Just because some people actually work for their money doesn’t mean they are beneath you.",
      author: "Kevin Kwan (Author)",
    },
    {
      text: "A great time! Although tonight’s been a bit . . . overwhelming.",
      author: "Rachel Chu",
    },
    {
      text: "You see, your reputation precedes you.",
      author: "Oliver T'sien",
    },
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="section home-section">
      <div className="hero">
        <h2 className="section-title">Crazy Rich Asians</h2>
        <p className="hero-subtitle">
          Exploring Kevin Kwan's novel about love, wealth, and family
        </p>
      </div>

      <div className="quote-carousel">
        <p className="quote-text">"{quotes[currentQuote].text}"</p>
        <p className="quote-author">— {quotes[currentQuote].author}</p>
        <div className="carousel-controls">
          <button className="carousel-button" onClick={prevQuote}>
            ← Previous
          </button>
          <button className="carousel-button" onClick={nextQuote}>
            Next →
          </button>
        </div>
        <div className="carousel-dots">
          {quotes.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === currentQuote ? 'active' : ''}`}
              onClick={() => setCurrentQuote(index)}
            />
          ))}
        </div>
      </div>

      <div className="content-card">
        <h3>About the Novel</h3>
        <p>
          <em>Crazy Rich Asians</em> is a novel by Kevin Kwan that follows the story
          of Rachel Chu, an American-Chinese economics professor at NYU, and her boyfriend
          Nick Young. When Rachel attends Nick's best friend's wedding in Singapore, she 
          discovers something that Nick has kept secret for the duration of their relationship.
           Nick is from one of the wealthiest families in Asia. 
        </p>
        <p>
          Rachel is thrown into a world of lavish estates, wealth, and high-class lifestyles. She quickly
          realizes that Nick's family, especially his stubborn mother Eleanor Young, has very specific
          expectations about who belongs in their elite circle, and Rachel, despite her academic accomplishments,
          doesn't quite fit in with them.
        </p>
        <p>
          The novel explores themes of wealth and social class, family expectations and
          reputation, and the complex understanding of cultural identity. Through imagery and compelling
          storytelling, Kwan gives the reader a fascinating glimpse into the lives of Asia's wealthy and 
          elite while addressing questions about love, belonging, and what it means to stay
          true to oneself.
        </p>
        <p>
          Published in 2013, <em>Crazy Rich Asians</em> eventually led to
          a trilogy that even had a film adaptation in 2018.
        </p>
      </div>
    </section>
  );
}

export default Home;
