function Themes() {
  const themes = [
    {
      title: 'Wealth and Social Class',
      description:
        'At the heart of Crazy Rich Asians is an exploration of extreme wealth and the rigid social hierarchies it creates. The novel reveals a world where money isn\'t just about material possessions—it\'s about heritage, family lineage, and centuries-old social networks. The Young family and their circle represent "old money" with established dynasties and unspoken rules about who belongs. Through Rachel\'s eyes, readers witness the stark contrast between American values of meritocracy and self-made success versus Asian elite society\'s emphasis on family background and inherited wealth. The book examines how money shapes relationships, creates barriers between people, and influences every aspect of life from marriage to friendship. It also highlights the absurd extremes of luxury that the ultra-wealthy enjoy, while questioning whether such opulence truly brings happiness or simply creates new pressures and expectations.',
    },
    {
      title: 'Family Expectations and Reputation',
      description:
        'Family obligations and the preservation of family reputation drive much of the conflict in the novel. For the Young family and their social circle, individual desires are often secondary to what benefits the family name and legacy. Eleanor Young embodies this philosophy, believing that Nick\'s choice of partner affects not just him but generations past and future. The novel explores the heavy burden of family expectations, particularly on children of prominent families who are expected to marry within their class, maintain appearances, and uphold traditions. This theme extends beyond the Youngs to other characters like Astrid, whose marriage suffers under the weight of family wealth, and various family members who struggle to balance personal happiness with familial duty. The book asks important questions about sacrifice, loyalty, and whether family obligations should supersede personal fulfillment.',
    },
    {
      title: 'Cultural Identity and East-West Differences',
      description:
        'A central tension in Crazy Rich Asians revolves around cultural identity, particularly the divide between Asian-American perspectives and traditional Asian values. Rachel, though ethnically Chinese, was raised in America with Western ideals of independence, equality, and individual achievement. She faces rejection not because she lacks Chinese heritage, but because she doesn\'t embody the specific cultural values and social understanding that Singapore\'s elite consider essential. The novel explores how different Chinese communities—whether in mainland China, Taiwan, Singapore, or America—have distinct cultures and values despite shared ancestry. Eleanor views Rachel\'s American upbringing as a deficit, believing she lacks proper respect for hierarchy and family traditions. Through this conflict, the book examines complex questions about authenticity, belonging, and what it means to claim a cultural identity. It also reveals how Asian cultures are not monolithic but rich with regional variations and different approaches to modernity and tradition.',
    },
  ];

  return (
    <section className="section themes-section">
      <h2 className="section-title">Major Themes</h2>
      <p className="section-intro">
        Exploring the deeper meanings and social commentary in the novel
      </p>

      <div className="themes-grid">
        {themes.map((theme, index) => (
          <div key={index} className="theme-card">
            <h3 className="theme-title">{theme.title}</h3>
            <p className="theme-description">{theme.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Themes;
