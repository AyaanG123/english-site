function Themes() {
  const themes = [
    {
      title: 'Wealth and Social Class',
      description:
        'At the heart of this novel is the exploration of extreme wealth and the social hierarchies it creates. The novel revolved around a world where money is not just about what you have, it is about your heritage, social network, and family history. The Young family and their circle are an example of “old money” with their established lineages and rules about who belongs where. Using Rachel as a vessel, readers are able to witness the contrast between the American values of hard work and self fulfillment that she possesses, versus Singapore’s focus on family and inherited wealth. The book focuses on how money shapes relationships, and influences aspects of life, from marriage to friendships. It also highlights the luxury that the wealthy enjoy, while also questioning whether extreme wealth truly brings happiness or just creates more pressure and expectations.',
    },
    {
      title: 'Family Expectations and Reputation',
      description:
        'Much of the conflict in the book is driven by familial obligations and the preservation of the Young family name. Throughout their family and circle, individual wants are often overlooked in favor of what benefits the family and its legacy. Eleanor Young is an embodiment of this philosophy, believing that Rachel is not a suitable partner for Nick. She constantly tries to remind Nick that his relationship affects the entire family and its future, not just him. The novel explores the heavy burden on the children of these prominent families, who are expected to maintain appearances, uphold traditions, and marry within their social class. This overarching theme extends to other relationships and characters, like Astrid. Her marriage is trembling under the weight of wealth, and her balance of making her family as well as her husband happy. The book covers important topics such as sacrifice, loyalty, and whether family obligations should trump personal desires.',
    },
    {
      title: 'Cultural Identity and East-West Differences',
      description:
        'Another central driver for conflict in the book is the tensions around cultural identity, specifically the divide between the east and the west. Rachel, although ethnically Chinese, was raised in America with western values of independence, equality, and individual achievement. She is looked down upon by the Singaporean elites, not because of a lack of heritage, but because she does not embody their own values and because she does not have the same priorities as them. The novel explores how different Chinese communities, in China, Taiwan, Singapore, or America have different cultures and values despite their shared ancestry. Eleanor believes Rachel lacks the proper values and respect for family hierarchy and traditions. Through their conflict, the book examines cultural belonging, and what it means to have a cultural identity. It also delves into how Asian cultures are overrun with different variations and approaches to tradition',
    },
  ];

  return (
    <section className="section themes-section">
      <h2 className="section-title">Major Themes</h2>
      <p className="section-intro">
        Exploring the deeper themes within the novel
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
