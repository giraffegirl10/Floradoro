import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  type SxProps,
  type Theme,
} from "@mui/material";
import { RARITY_CONFIG } from "../constants";
import type { Plant } from "../types/plant";

export const floraMetaPillSx: SxProps<Theme> = {
  px: 1,
  py: 0.55,
  borderRadius: "999px",
  fontSize: "0.9rem",
  fontWeight: 700,
  lineHeight: 1,
  display: "flex",
  alignItems: "center",
  gap: 0.4,
  whiteSpace: "nowrap",
};

export const floraMetaVariants = {
  status: {
    backgroundColor: "#DCE7C8",
    border: "1px solid #AAB895",
    color: "#3F392F",
  },

  focus: {
    backgroundColor: "#EFE2BF",
    border: "1px solid #C9B68B",
    color: "#3F392F",
  },

  rarity: {
    backgroundColor: "#E3D7F2",
    border: "1px solid #B59AD6",
    color: "#5B3F7A",
  },
};

type PlantCardProps = {
  plant: Plant;
  onCardClick: () => void;
};

export default function PlantCard({ plant, onCardClick }: PlantCardProps) {
  const rarity = RARITY_CONFIG[plant.rarity];
  const RarityIcon = rarity.icon;

  return (
    <Card
      key={plant.key}
      variant="outlined"
      sx={{
        borderRadius: 1,
      }}
    >
      <CardActionArea onClick={onCardClick}>
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
        <CardContent sx={{ px: 1.5, pb: 1.5, pt: 0.5 }}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {plant.name}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: 1,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                ...floraMetaPillSx,
                ...floraMetaVariants.status,
              }}
            >
              🌸
              <span>Max Bloom</span>
            </Box>

            <Box
              sx={{
                ...floraMetaPillSx,
                ...floraMetaVariants.focus,
              }}
            >
              ⏱<span>150 min</span>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
