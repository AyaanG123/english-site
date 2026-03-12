function Adaptation() {
  const timeline = [
    {
      year: '2013',
      title: 'Novel Published',
      description: 'Kevin Kwan\'s debut novel Crazy Rich Asians is published and becomes an immediate bestseller.',
    },
    {
      year: '2015',
      title: 'Film Rights Acquired',
      description: 'Warner Bros. acquires the film rights to bring the story to the big screen.',
    },
    {
      year: '2018',
      title: 'Movie Release',
      description: 'The film directed by Jon M. Chu premieres, becoming a cultural phenomenon and box office success.',
    },
    {
      year: '2023',
      title: 'Continued Legacy',
      description: 'The franchise expands with sequels and the novel remains widely celebrated in literary and film circles.',
    },
  ];

  return (
    <section className="section adaptation-section">
      <h2 className="section-title">From Page to Screen</h2>
      <p className="section-intro">
        The 2018 film adaptation that brought the story to a global audience
      </p>

      <div className="content-card">
        <h3>A Groundbreaking Film</h3>
        <p>
          In 2018, <em>Crazy Rich Asians</em> was adapted into a major motion picture directed by
          Jon M. Chu and produced by Warner Bros. The film became a cultural milestone as the first
          Hollywood studio film in 25 years to feature a predominantly Asian cast in a contemporary
          setting. Starring Constance Wu as Rachel Chu and Henry Golding as Nick Young, with Michelle
          Yeoh as the formidable Eleanor Young, the movie brought Kevin Kwan's glittering world to
          life on screen.
        </p>

        <h3>Critical and Commercial Success</h3>
        <p>
          The film was both a critical darling and a box office success, grossing over $238 million
          worldwide against a $30 million budget. Critics praised its lush cinematography, strong
          performances, and the way it balanced romantic comedy with meaningful commentary on family,
          culture, and identity. The movie's success proved that stories centered on Asian characters
          and culture could resonate with mainstream audiences worldwide, paving the way for greater
          representation in Hollywood.
        </p>

        <h3>Adaptations and Changes</h3>
        <p>
          While the film remains faithful to the core story and spirit of the novel, it necessarily
          condensed and simplified some elements for the screen. The movie focuses primarily on
          Rachel and Nick's relationship and Rachel's conflict with Eleanor, streamlining the book's
          numerous subplots and extensive cast of characters. Some characters receive reduced screen
          time or modified storylines, and certain scenes are reimagined for cinematic impact. For
          instance, the film adds a dramatic mahjong scene between Rachel and Eleanor that doesn't
          appear in the book but effectively captures their power dynamic. Despite these changes,
          the adaptation successfully preserves the novel's themes of family, cultural identity, and
          the challenges of bridging different worlds.
        </p>

        <h3>Cultural Impact</h3>
        <p>
          Beyond its commercial success, <em>Crazy Rich Asians</em> sparked important conversations
          about Asian representation in media, the diversity within Asian cultures, and the universal
          appeal of stories told from non-Western perspectives. The film's vibrant celebration of
          Asian culture, from its soundtrack featuring Asian and Asian-American artists to its
          showcase of Singaporean locations and cuisine, resonated deeply with audiences who rarely
          saw themselves represented in Hollywood productions. It demonstrated that culturally
          specific stories could achieve broad appeal without diluting their authenticity.
        </p>
      </div>

      <div className="film-timeline">
        <h3 style={{ marginBottom: '2rem', fontSize: '1.6rem', color: '#1a1a1a' }}>Timeline</h3>
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1a1a1a' }}>
                {item.title}
              </h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Adaptation;
