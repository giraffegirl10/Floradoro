export type Plant = {
  key: string;
  name: string;
  type: PlantType;
  rarity: Rarity;
};

export type Rarity = "common" | "rare" | "epic" | "legendary";

export type PlantType = "succulent" | "flower" | "cactus";
