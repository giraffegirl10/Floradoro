export type Plant = {
  key: string;
  name: string;
  type: PlantType;
  rarity: Rarity;
  status: Status;
};

export type Rarity = "common" | "rare" | "epic" | "legendary";
export type Status = "grown" | "wilted" | "undiscovered";
export type PlantType = "succulent" | "flower" | "cactus";
