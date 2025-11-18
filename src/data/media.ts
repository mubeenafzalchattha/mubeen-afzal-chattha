export type Media = {
    id: string;
    title: string;
    year?: number;
    type: "movie" | "anime";
    cover?: string;
  };
  
  export const MEDIA: Media[] = [
    { id: "m1", title: "Spirited Away", year: 2001, type: "movie", cover: "https://m.media-amazon.com/images/I/51m+6XgC7jL._AC_.jpg" },
    { id: "a1", title: "Attack on Titan (S1)", year: 2013, type: "anime", cover: "https://m.media-amazon.com/images/I/81x7m1s4gNL._AC_SL1500_.jpg" },
    { id: "m2", title: "Parasite", year: 2019, type: "movie", cover: "https://m.media-amazon.com/images/I/81Fh-Gm4-XL._AC_SL1500_.jpg" },
  ];
  