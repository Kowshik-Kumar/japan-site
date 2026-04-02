export type Folktale = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  className: string;
};

export const folktales: Folktale[] = [
  {
    title: "Momotaro",
    subtitle: "The Peach Boy",
    description:
      "Born from a giant peach, Momotaro journeys with loyal animal companions to challenge the ogres and restore peace.",
    image: "/assets/momotaro.svg",
  },
  {
    title: "Urashima Taro",
    subtitle: "The Sea's Lost Time",
    description:
      "A kind fisherman visits the Dragon Palace beneath the waves, only to discover that time has moved differently on land.",
    image: "/assets/urashima.svg",
  },
  {
    title: "Yuki-Onna",
    subtitle: "The Snow Spirit",
    description:
      "A mysterious woman of winter appears in moonlit storms, carrying both tenderness and danger in equal measure.",
    image: "/assets/yuki-onna.svg",
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
