import { Box, CardMedia } from "@mui/material";
import { RARITY_CONFIG } from "../constants";

import type { Plant } from "../types/plant";
type PlantImageProps = {
  plant: Plant;
};

export default function PlantImage({ plant }: PlantImageProps) {
  const rarity = RARITY_CONFIG[plant.rarity];
  const RarityIcon = rarity.icon;

  return (
    <Box
      sx={{
        p: 1,
        position: "relative",
      }}
    >
      <CardMedia
        sx={{
          aspectRatio: "1 / 1",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          backgroundColor: "#c8d5b9",
          borderRadius: 1,
        }}
        component="img"
        height="200"
        image={`/${plant.key}.png`}
        alt={plant.name}
      />
      <Box
        sx={{
          position: "absolute",
          top: 14,
          right: 14,
          width: 28,
          height: 28,
          borderRadius: "999px",
          backgroundColor: `${rarity.color}33`,
          border: `1px solid ${rarity.color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RarityIcon
          sx={{
            fontSize: 16,
            color: rarity.color,
          }}
        />
      </Box>
    </Box>
  );
}
