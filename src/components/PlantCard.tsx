import {
  Card,
  CardActionArea,
  Box,
  CardContent,
  Typography,
  Stack,
  type SxProps,
  type Theme,
} from "@mui/material";
import type { Plant } from "../types/plant";
import PlantImage from "./PlantImage";

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
  return (
    <Card
      key={plant.key}
      variant="outlined"
      sx={{
        borderRadius: 1,
      }}
    >
      <CardActionArea onClick={onCardClick}>
        <PlantImage plant={plant} />
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
