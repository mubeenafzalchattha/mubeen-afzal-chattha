export type Post = {
  id: string;
  title: string;
  slug: string;
  category: "travel" | "marketing" | "dev";
  excerpt: string;
  content: string;
};

// Keep this for backward compatibility, but components should use the service
export const POSTS: Post[] = [
  // {
  //   id: "p1",
  //   slug: "travel-and-my-passion-for-traveling",
  //   title: "Travel and my Passion for it",
  //   category: "travel",
  //   excerpt: "A 10-day trip...",
  //   content:
  //     "I backpacked across Kuala Lumpur, Penang, and Langkawi on a tiny budget. Between street food stalls, island ferries, and morning hikes, I found a rhythm that made travel feel simple again. In this post I share my route, costs, places to stay, and a short packing list so you can copy the trip in a weekend of planning.",
  // },
  // {
  //   id: "p1",
  //   slug: "my-first-solo-trip",
  //   title: "My First Solo Traveling",
  //   category: "travel",
  //   excerpt: "A 10-day trip...",
  //   content:
  //     "I backpacked across Kuala Lumpur, Penang, and Langkawi on a tiny budget. Between street food stalls, island ferries, and morning hikes, I found a rhythm that made travel feel simple again. In this post I share my route, costs, places to stay, and a short packing list so you can copy the trip in a weekend of planning.",
  // },
  // {
  //   id: "p2",
  //   slug: "power-of-manifestation",
  //   title: "Power of Manifestation",
  //   category: "marketing",
  //   excerpt: "What actually works now...",
  //   content:
  //     "Creators win by shipping consistently and building lightweight funnels. This write-up covers my experiments with short-form content, newsletter loops, and simple lead magnets that compound without a big team or ad budget. Templates and tools included.",
  // },
  // {
  //   id: "p2",
  //   slug: "how-i-end-up-coding",
  //   title: "How I end up coding",
  //   category: "marketing",
  //   excerpt: "What actually works now...",
  //   content:
  //     "Creators win by shipping consistently and building lightweight funnels. This write-up covers my experiments with short-form content, newsletter loops, and simple lead magnets that compound without a big team or ad budget. Templates and tools included.",
  // },
  // {
  //   id: "p3",
  //   slug: "my-journey-from-a-9-5-to-a-founder",
  //   title: "My Journey: From a 9 to 5 job to a founder",
  //   category: "dev",
  //   excerpt: "Step-by-step migration plan...",
  //   content:
  //     "A pragmatic path to move a production Laravel app to a modern React stack without a risky big-bang rewrite. We incrementally carve out pages, share auth, and keep the database the same until the last mile. Includes folder structure, auth notes, and deployment tips.",
  // },
  // {
  //   id: "p4",
  //   slug: "my-journey-from-a-9-5-to-a-founder",
  //   title: "My Journey: From a 9 to 5 job to a founder",
  //   category: "dev",
  //   excerpt: "Step-by-step migration plan...",
  //   content:
  //     "A pragmatic path to move a production Laravel app to a modern React stack without a risky big-bang rewrite. We incrementally carve out pages, share auth, and keep the database the same until the last mile. Includes folder structure, auth notes, and deployment tips.",
  // },
];
  