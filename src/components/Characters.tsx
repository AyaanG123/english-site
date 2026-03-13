function Characters() {
  const characters = [
    {
      name: 'Rachel Chu',
      description:
        'Rachel Chu is an accomplished economics professor at New York University, who has structured most of her life on her independence, knowledge, and her hard working ethics. Raised by a single mother in California, Rachel is down to earth and resourceful, but having little knowledge of the social and wealth standards she soon gets pulled into in Singapore. When she travels there with Nick, she is forced to navigate through a world where her family and status matter more than her own knowledge and achievements. Throughout the book, despite facing backlash and scrutiny from Nick’s family, she remains true to herself and proves herself worthy of taking on even the most daunting social pressure.',
    },
    {
      name: 'Nick Young',
      description:
        'Nicholas Young is an intelligent and charismatic history professor at New York University. As the heir to one of Singapore’s richest and most powerful families, he grew up surrounded by luxury and material things. However, he chose to live his life away from the spotlight. He often downplay’s his family\'s immense wealth, especially to his girlfriend Rachel. And although kind-hearted and thoughtful, he severely underestimates the challenges that introducing Rachel to his family will present to their relationship. In the novel, he constantly finds himself torn between the weight of his family values and his love for Rachel. He eventually has to decide what truly matters to him.',
    },
    {
      name: 'Eleanor Young',
      description:
        'Eleanor Sung Young is Nick’s mother, and the matriarch of the Young family. Born into a Taiwanese family, she married into the Young dynasty and has since spent her life upholding the family\'s status and standards. She is smart, elegant, and very protective of her son’s future, driving her opinion that Nick should marry someone from their social circle that understands the responsibilities that come with marrying into a powerful family. Eleanor views Rachel as an outsider who lacks the proper background and skills needed to maintain the Young name. Throughout Rachel’s visit, she uses subtle, but impressive tactics to make Rachel feel unwelcome. Despite her neutral appearance, she is driven by a love for her family and her desire to preserve the Young name.',
    },
    {
      name: 'Astrid Leong',
      description:
        'Astrid Leong is Nick’s cousin, who is widely admired as one of the most beautiful women among Singapore’s elite. Born into the wealthy Leon family, Astrid possesses an effortless elegance, as well as sophisticated fashion taste, making her a fashion icon and socialite. However, beneath the exterior beauty lies a shaky marriage to Michael Teo, a tech entrepreneur who struggles with his wife’s immense wealth and status. Astrid often downplay’s her wealth and hides her purchases to protect her husband’s ego, revealing the effort and issues that come with a wealth gap in relationships. She is very close and down to earth with both Rachel and Nick, and as a result she becomes a support figure to Rachel, helping her navigate Singapore’s high society.',
    },
  ];

  return (
    <section className="section characters-section">
      <h2 className="section-title">Main Characters</h2>
      <p className="section-intro">
        Meet the Characters
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
