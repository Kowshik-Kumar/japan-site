export type Folktale = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string[];
  image: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  className: string;
};

export const folktales: Folktale[] = [
  {
    slug: "momotaro",
    title: "Momotaro",
    subtitle: "The Peach Boy",
    description:
      "Born from a giant peach, Momotaro journeys with loyal animal companions to challenge the ogres and restore peace.",
    fullDescription: [
      "Momotaro (Peach Boy) is one of Japan's most beloved folktales.",
      "An elderly, childless couple discovers a giant peach floating down a river. When they slice it open, they find a baby boy inside. Overjoyed, they name him Momotaro and raise him as their own.",
      "He grows up much bigger and stronger than other children, but he has a kind and sensible nature.",
      "When word reaches the family of a group of ogres (oni) pillaging the land, Momotaro sets off to confront them with a handful of millet dumplings called kibidango. Along the way, he meets a monkey, a dog, and a pheasant, and shares the dumplings with them. In exchange, they agree to help him fight the ogres.",
      "The four companions track the ogres to their island home. The door is locked, but the pheasant flies over the wall and lets them in. Momotaro fights the ogres while his animal friends peck, scratch, and bite, until the ogres surrender and hand over their stolen loot.",
      "The story is widely seen as rich in symbolism, especially in how food is presented as a gift from nature that binds people together. It is closely linked to Okayama Prefecture, where it remains especially celebrated. The name combines momo (peach) and taro, a classic name for a firstborn son.",
    ],
    image: "/assets/momotaro.jpeg",
  },
  {
    slug: "urashima-taro",
    title: "Urashima Taro",
    subtitle: "The Sea's Lost Time",
    description:
      "A kind fisherman visits the Dragon Palace beneath the waves, only to discover that time has moved differently on land.",
    fullDescription: [
      "Urashima Taro is often called Japan's version of Rip Van Winkle.",
      "A kind young fisherman sees a group of children tormenting a sea turtle on the beach. He rescues it and sets it free. The next day, the same turtle returns and, as a reward, offers to carry him to Ryugu-jo, the Dragon Palace beneath the sea.",
      "There he is welcomed by the beautiful Princess Otohime. He feasts, dances, and lives in wonder for what feels like just a few days. But when homesickness strikes and he asks to return, the princess gives him a tamatebako, a magical lacquered box, with one condition: never open it.",
      "Back on land, nothing is familiar. His village has changed, his home is gone, and no one recognizes him. Hundreds of years have passed while he was away.",
      "Devastated and lost, he forgets the princess's warning and opens the box. White smoke pours out, and he instantly withers into an old man and crumbles away.",
      "Themes: time is irreversible, curiosity has consequences, and kindness does not always guarantee a happy ending.",
    ],
    image: "/assets/urashimatro.jpeg",
  },
  {
    slug: "yuki-onna",
    title: "Yuki-Onna",
    subtitle: "The Snow Spirit",
    description:
      "A mysterious woman of winter appears in moonlit storms, carrying both tenderness and danger in equal measure.",
    fullDescription: [
      "Yuki-Onna, the Snow Woman, is one of Japan's most haunting folktale figures.",
      "She is a supernatural spirit (yokai) who appears in snowstorms: tall, pale, and breathtakingly beautiful, with long black hair and white robes. She drifts across the snow, sometimes floating without leaving footprints.",
      "She is known to appear before travelers lost in blizzards and breathe her icy breath upon them, freezing them to death or leading them astray until they collapse. She is both terrifying and mesmerizing.",
      "The most famous version of her story comes from Lafcadio Hearn's Kwaidan (1904). Two woodcutters are caught in a snowstorm. Yuki-Onna kills the elder one but spares the younger, Minokichi, warning him never to speak of her.",
      "Years later, Minokichi meets and marries a beautiful woman named Yuki. They live happily and have children together. One winter night, he finally tells her about his strange encounter long ago. The woman reveals herself: she is Yuki-Onna.",
      "She spares him only for the sake of their children, then vanishes into the cold forever.",
      "Themes: the story blends love, secrecy, and loss. Yuki-Onna is neither purely evil nor purely good; she is a force of nature, cold yet capable of love.",
    ],
    image: "/assets/yuki-onna.jpeg",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Silk Kimono Layers",
    image: "/assets/gallery-kimono,.jpeg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Indigo Patterns",
    image: "/assets/gallery-indigo.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Lantern Street",
    image: "/assets/gallery-lantern.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Folklore Masks",
    image: "/assets/gallery-mask.jpeg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Sakura Evening",
    image: "/assets/gallery-sakura-evening.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
];
