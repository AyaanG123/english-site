import { useState } from 'react';

function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "Money can't buy you class, but it can buy you a penthouse with a view.",
      author: "Eleanor Young",
    },
    {
      text: "This isn't about money. It's about family, honor, and reputation.",
      author: "Eleanor Young",
    },
    {
      text: "I came to Singapore thinking I was coming to meet his family. I had no idea I was stepping into a different world entirely.",
      author: "Rachel Chu",
    },
    {
      text: "It doesn't matter how accomplished you are or how much you've achieved—if you're not born into the right family, you'll always be an outsider.",
      author: "Astrid Leong",
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
        <h2 className="section-title">Welcome to the World of Crazy Rich Asians</h2>
        <p className="hero-subtitle">
          Exploring Kevin Kwan's captivating novel about love, wealth, and family
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
          <em>Crazy Rich Asians</em> is a contemporary novel by Kevin Kwan that follows the story
          of Rachel Chu, an American-born Chinese economics professor from New York, and her boyfriend
          Nick Young. When Rachel accompanies Nick to Singapore for his best friend's wedding, she
          discovers that Nick comes from one of the wealthiest and most prominent families in Asia—a
          fact he had kept remarkably understated.
        </p>
        <p>
          Upon arrival in Singapore, Rachel is thrust into a world of unimaginable luxury and excess,
          where private jets, lavish estates, and exclusive social gatherings are the norm. She quickly
          realizes that Nick's family, particularly his formidable mother Eleanor Young, has very specific
          expectations about who belongs in their elite circle—and Rachel, despite her accomplishments,
          doesn't quite fit the mold.
        </p>
        <p>
          The novel masterfully explores themes of wealth and social class, family expectations and
          reputation, and the complex dynamics of cultural identity. Through sharp wit and vivid
          storytelling, Kwan presents a fascinating glimpse into the lives of Asia's ultra-wealthy
          elite while examining universal questions about love, belonging, and what it means to stay
          true to oneself.
        </p>
        <p>
          Published in 2013, <em>Crazy Rich Asians</em> became a cultural phenomenon and launched
          a trilogy that continues to captivate readers worldwide with its blend of romance, humor,
          and social commentary.
        </p>
      </div>
    </section>
  );
}

export default Home;
