export type Travel = {
    id: string;
    name: string;
    coordsPct: { x: number; y: number };
    year: number;
  };
  
  export const TRAVELS: Travel[] = [
    { id: "t1", name: "Uzbekistan", coordsPct: { x: 41.3775, y: 64.5853 }, year: 2025 },
    { id: "t1", name: "Malaysia", coordsPct: { x: 3.7723121426003745, y: 102.16647826450784 }, year: 2025 },
    { id: "t2", name: "Oman", coordsPct: { x: 20.5937, y: 54.9777 }, year: 2024 },
    { id: "t3", name: "Azerbaijan", coordsPct: { x: 40.1431, y: 47.5769 }, year: 2024 },
    { id: "t4", name: "Indonesia", coordsPct: { x: -1.5824737198200425, y:116.24939240983511 }, year: 2024 },
    { id: "t5", name: "Georgia", coordsPct: { x: 42.3154, y: 43.3569 }, year: 2023 },
    { id: "t5", name: "Saudi Arabia", coordsPct: { x: 23.8859, y: 45.0792 }, year: 2023 },
    { id: "t7", name: "UAE", coordsPct: { x: 23.4241, y: 53.8478 }, year: 2023 },
    { id: "t8", name: "Pakistan", coordsPct: { x: 30.3753,y: 69.3451 }, year: 2023 },

  ];
  
  export const TOTAL_COUNTRIES_ESTIMATE = 195;
  