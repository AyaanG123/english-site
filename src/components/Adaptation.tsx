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
      year: '2026',
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
          Jon M. Chu and produced by Warner Bros. The film was a trendsetter, as it was the first film in over 25 years to feature an almost completely Asian cast. The movie stars Constance Wu as Rachel Chu and Henry Golding as Nick Young, with Michelle
          Yeoh as Eleanor Young, the movie brought Kevin Kwan's compelling novel to
          life on screen.
        </p>

        <h3>Critical and Commercial Success</h3>
        <p>
          The film was both a huge economic success, grossing over $238 million
          worldwide with only a $30 million budget. Critics praised its cinematography, acting
          performances, and the way it balanced romantic comedy with the inclusion of themes like family,
          culture, and identity. The movie paved the way for representation in Hollywood, as it proved that films focused around Asian stories could be successful and resonate with people from all backgrounds.
        </p>

        <h3>Adaptations and Changes</h3>
        <p>
          While the film tries to stay true to the novel and its themes, it condensed and simplified some elements for the screen. The movie focuses primarily on Rachel and Nick’s relationship and Rachel’s conflict with Eleanor, creating a more focused story. In addition, a lot of characters received less screen time or modified stories, as well as some scenes being added and removed. For example, the film adds a dramatic mahjong scene between Rachel and Eleanor that never appears in the book, but shows their power disparity and conflict in an enticing way. Despite the numerous changes, the film adaptation successfully preserves all the themes of family, cultural identity, and the gap between the western and eastern world.
        </p>

        <h3>Cultural Impact</h3>
        <p>
          <em>Crazy Rich Asians</em> was a commercial success, and it sparked talks about Asian representation in media and Hollywood, as well as the representation of Asian culture and stories told from Eastern perspectives. The film’s cast, as well as its soundtrack and location, resonated with audiences around the world, especially those who rarely saw themselves represented in Western media. It showed the world that culturally important stories could appeal to a lot of people without having to sacrifice authenticity.
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
