import {
  Card,
  CardContent,
  CardHeader,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";

import { RARITY_CONFIG } from "../constants";
import PlantCard from "../components/PlantCard";
import type { Plant } from "../types/plant";
import PlantDetailsDrawer from "../components/PlantDetails";

const PLANTS: Plant[] = [
  {
    key: "cactus-bunny",
    name: "Cactus Bunny",
    type: "cactus",
    rarity: "common",
  },
  {
    key: "bears-paw",
    name: "Bear's Paw",
    type: "succulent",
    rarity: "rare",
  },
  {
    key: "lily-of-the-valley",
    name: "Lily of the Valley",
    type: "flower",
    rarity: "epic",
  },
  {
    key: "pancake-plant",
    name: "Pancake Plant",
    type: "succulent",
    rarity: "legendary",
  },
];

export default function Collection() {
  const [selectedPlant, setSelectedPlant] = useState<Plant>();

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      spacing={2}
      sx={{ alignItems: "flex-start" }}
    >
      <Card variant="outlined" sx={{ width: "80%" }}>
        <CardHeader
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            "& .MuiCardHeader-action": {
              margin: { xs: "8px 0 0 0", sm: "-4px -8px 0 0" },
              alignSelf: { xs: "flex-start", sm: "flex-start" },
            },
          }}
          title="Your Flora Collection"
          subheader="Showing 12 of 24 Discoveries"
          action={
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Stack>
                <Typography>Status</Typography>
                <ToggleButtonGroup
                  size="small"
                  color="primary"
                  exclusive
                  value="wilted"
                >
                  <ToggleButton value="grown">Grown</ToggleButton>
                  <ToggleButton value="wilted">Wilted</ToggleButton>
                  <ToggleButton value="undiscovered">Undiscovered</ToggleButton>
                </ToggleButtonGroup>
              </Stack>
              <Stack>
                <Typography>Type</Typography>
                <ToggleButtonGroup
                  size="small"
                  color="primary"
                  exclusive
                  value="flower"
                >
                  <ToggleButton value="cactus">Cactus</ToggleButton>
                  <ToggleButton value="succulent">Succulent</ToggleButton>
                  <ToggleButton value="flower">Flower</ToggleButton>
                </ToggleButtonGroup>
              </Stack>
              <Stack>
                <Typography>Rarity</Typography>
                <ToggleButtonGroup
                  value={"epic"}
                  exclusive
                  aria-label="item rarity"
                  size="small"
                >
                  {Object.entries(RARITY_CONFIG).map(([key, rarity]) => {
                    const Icon = rarity.icon;

                    return (
                      <ToggleButton
                        key={key}
                        value={key}
                        sx={{
                          gap: 0.75,

                          color: "text.secondary",

                          "& .MuiSvgIcon-root": {
                            fontSize: 16,
                          },

                          "&.Mui-selected": {
                            backgroundColor: `${rarity.color}22`,
                            color: rarity.color,
                            borderColor: rarity.color,

                            "&:hover": {
                              backgroundColor: `${rarity.color}33`,
                            },
                          },
                        }}
                      >
                        <Icon />
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </ToggleButton>
                    );
                  })}
                </ToggleButtonGroup>
              </Stack>
            </Stack>
          }
        />

        <CardContent>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 1.5,
            }}
          >
            {[...PLANTS, ...PLANTS, ...PLANTS].map((plant) => {
              return (
                <PlantCard
                  key={plant.key}
                  plant={plant}
                  onCardClick={() => {
                    setSelectedPlant(plant);
                  }}
                />
              );
            })}
          </Box>
        </CardContent>
      </Card>
      <PlantDetailsDrawer />
    </Stack>
  );
}
