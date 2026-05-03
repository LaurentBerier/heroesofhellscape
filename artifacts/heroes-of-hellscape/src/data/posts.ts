export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  coverImage?: string;
  content: Section[];
}

export interface Section {
  type: "paragraph" | "heading" | "quote" | "divider";
  text?: string;
}

export const posts: Post[] = [
  {
    slug: "why-monsters-are-history",
    title: "Why Every Monster in History Is the Same Monster",
    date: "April 28, 2026",
    category: "World Building",
    excerpt:
      "The Wendigo of the Algonquin. The Strix of ancient Rome. The Draugr of the Norse. Different cultures, different centuries, same described behaviour. We think that's not a coincidence.",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Every culture that has ever existed on this planet has a monster. Not just a monster — the same monster, wearing a different name like a coat borrowed from a stranger.",
      },
      {
        type: "paragraph",
        text: "The Wendigo of the Algonquin people: a vast, cold intelligence that inhabits the skin of the greedy and the lost. The Strix of ancient Rome: a night-creature that fed on blood and corrupted the young. The Draugr of Norse mythology: the dead that would not stay dead, driven by an appetite they couldn't name. The Vetala of Sanskrit tradition: an entity that possesses corpses and exists outside the flow of time, watching, calculating.",
      },
      {
        type: "quote",
        text: "The monster is never the point. The monster is the symptom. The question historians never ask is: what caused the symptom to appear in the same form, across cultures that had no contact with one another?",
      },
      {
        type: "paragraph",
        text: "Mainstream scholarship treats this as convergent mythology — the same fears producing the same symbols independently. We find that explanation convenient, and convenient explanations are usually wrong.",
      },
      {
        type: "heading",
        text: "The Pattern Nobody Talks About",
      },
      {
        type: "paragraph",
        text: "Cross-reference the monster myths of any two unconnected civilisations and you find not just thematic similarity — you find behavioural specificity. The entity that appears in the Algonquin oral tradition and the entity described by Roman scribes three thousand years earlier share the same three traits: they are drawn to moments of mass conflict, they operate by influence rather than direct action, and they are nearly impossible to destroy because the communities that encounter them disagree on what they are.",
      },
      {
        type: "paragraph",
        text: "That last point is the one that haunts us. You can only fight what you can name. And the most consistent feature of these entities — the detail that repeats itself in Siberia, in sub-Saharan Africa, in pre-Columbian Mesoamerica — is that they ensure they are never named the same thing twice.",
      },
      {
        type: "heading",
        text: "Where The Fremdling Begins",
      },
      {
        type: "paragraph",
        text: "The word Fremdling is German. It means 'stranger' — but specifically the kind of stranger who arrives in a community and is never quite absorbed by it. The stranger who learns the language too perfectly, who knows things about you that you never told them, who has been in town for six months but nobody can remember exactly when they arrived.",
      },
      {
        type: "paragraph",
        text: "We set our first episode in 1944 because the Second World War is the most documented catastrophe in human history, and yet there are corners of it that remain genuinely inexplicable. Entire units that vanished. Decisions made by otherwise rational commanders that bordered on insane. Moments where the historical record simply... skips.",
      },
      {
        type: "paragraph",
        text: "We looked at those gaps and asked: what if the gap is the story?",
      },
      {
        type: "quote",
        text: "History is written by the survivors. But some things ensure there are no survivors left to write. Those events get called accidents. Coincidences. Acts of God.",
      },
      {
        type: "heading",
        text: "What This Means for the Universe",
      },
      {
        type: "paragraph",
        text: "Heroes of Hellscape is not a horror comic. It is a historical investigation that happens to involve things that should not exist. Each episode will drop you into a different era — the fall of Constantinople, the Mongol campaigns, the Plague years, the birth of the atomic age — and in each one, you will find the same intelligence operating under a different mask.",
      },
      {
        type: "paragraph",
        text: "The heroes of this universe are not chosen ones. They are people who looked at a gap in the record and refused to look away. Soldiers, scribes, physicians, criminals. People with nothing in common except that they were in the wrong place at the moment something ancient decided to move.",
      },
      {
        type: "paragraph",
        text: "The Fremdling is the first report. There will be others.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "Issue #01 of The Fremdling is available now. If this universe interests you, join the order below — early access to every future episode, world-building dispatches, and the occasional document that probably shouldn't be public.",
      },
    ],
  },
];
