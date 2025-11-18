export type Book = {
    id: string;
    title: string;
    author?: string;
    status: "read" | "reading";
  };
  
  export const BOOKS: Book[] = [
    { id: "b1", title: "Wuthering Heights", author: "Emily Brontë", status: "reading" },
    { id: "b1", title: "Almanaks of Naval Ravikant", author: "Eric Jorgenson", status: "reading" },
    { id: "b1", title: "Think and Grow Rich", author: "Napoleon Hill", status: "read" },
    { id: "b2", title: "Atomic Habits", author: "James Clear", status: "reading" },
    { id: "b1", title: "Sense and Sensibility", author: "Jane Austin", status: "read" },
    { id: "b1", title: "Emma", author: "Jane Austin", status: "read" },
    { id: "b1", title: "It only happen in movies", author: "Holly Bourne", status: "read" },
    { id: "b1", title: "Munh Wal Kaaba Sharief", author: "Mustansar Hussain Tarar", status: "read" },
    { id: "b1", title: "Pyar ka pehla shehar", author: "Mustansar Hussain Tarar", status: "read" },
    { id: "b1", title: "Nanga Parbat", author: "Mustansar Hussain Tarar", status: "read" },
    { id: "b1", title: "40 rules of love", author: "Elif Şafak", status: "read" },
    { id: "b1", title: "Gaze", author: "Elif Şafak", status: "read" },

  ];
  