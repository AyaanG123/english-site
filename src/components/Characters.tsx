function Characters() {
  const characters = [
    {
      name: 'Rachel Chu',
      description:
        'Rachel is an accomplished economics professor at New York University who has built her life on independence, intelligence, and hard work. Raised by a single mother in California, Rachel is grounded and practical, with little awareness of the extreme wealth that exists in Asian elite circles. When she travels to Singapore with Nick, she finds herself navigating a world completely foreign to her—one where family lineage and social status matter more than personal achievement. Despite facing intense scrutiny and opposition from Nick\'s family, Rachel remains true to her values and dignity, proving that strength of character can withstand even the most daunting social pressures.',
    },
    {
      name: 'Nick Young',
      description:
        'Nicholas Young is a charming and intelligent history professor at New York University who has deliberately downplayed his family\'s immense wealth and social prominence. As the heir to one of Singapore\'s oldest and most powerful families, Nick grew up surrounded by luxury but chose to build his own life away from the family spotlight. He is kind-hearted, thoughtful, and deeply in love with Rachel, though he underestimates the challenges his family will present to their relationship. Nick finds himself torn between his love for Rachel and the weight of family expectations, ultimately having to decide what matters most to him.',
    },
    {
      name: 'Eleanor Young',
      description:
        'Eleanor Sung Young is Nick\'s mother and the formidable matriarch who fiercely guards her family\'s reputation and legacy. Born into a prominent Taiwanese family, Eleanor married into the Young dynasty and has spent her life upholding its traditions and standards. She is elegant, calculating, and deeply protective of her son\'s future, believing that Nick should marry someone from their social circle who understands the responsibilities that come with the Young name. Eleanor sees Rachel as an outsider who lacks the proper background and breeding, and she employs subtle but powerful tactics to make Rachel feel unwelcome. Despite her cold exterior, Eleanor is driven by genuine love for her family and a fierce desire to preserve what generations have built.',
    },
    {
      name: 'Astrid Leong',
      description:
        'Astrid Leong is Nick\'s glamorous cousin, widely admired as one of the most beautiful and sophisticated women in Singapore\'s elite society. Born into the incredibly wealthy Leong family, Astrid possesses impeccable taste and an effortless elegance that makes her a fashion icon and social darling. However, beneath her perfect exterior lies a troubled marriage to Michael Teo, a self-made tech entrepreneur who struggles with feelings of inadequacy in the face of his wife\'s enormous wealth. Astrid finds herself constantly downplaying her success and hiding her purchases to protect her husband\'s ego, revealing the complex challenges that come with extreme wealth disparities in relationships. She is kind to Rachel and becomes a supportive figure who understands the difficulties of navigating high society.',
    },
  ];

  return (
    <section className="section characters-section">
      <h2 className="section-title">Main Characters</h2>
      <p className="section-intro">
        Meet the key players in this story of love, family, and fortune
      </p>

      <div className="characters-grid">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <h3 className="character-name">{character.name}</h3>
            <p className="character-description">{character.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Characters;
