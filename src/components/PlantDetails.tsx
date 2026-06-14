import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import PlantImage from "./PlantImage";
import type { Plant } from "../types/plant";

type PlantDetailsProps = { open?: boolean; selectedPlant: Plant | undefined };
export default function PlantDetails({
  open,
  selectedPlant,
}: PlantDetailsProps) {
  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        width: "20%",
        flexShrink: 0,
        position: "sticky",
        top: `calc(${
          typeof theme.mixins.toolbar.minHeight === "number"
            ? theme.mixins.toolbar.minHeight
            : 64
        }px + ${theme.spacing(3)})`,
        alignSelf: "flex-start",
      })}
    >
      <CardHeader
        title="Flora Details"
        sx={{
          p: 1,
          textAlign: "center",
          bgcolor: "secondary.light",
        }}
      />
      <CardContent>
        {selectedPlant ? (
          <PlantImage plant={selectedPlant} />
        ) : (
          <Typography>No plant selected.</Typography>
        )}
      </CardContent>
    </Card>
  );
}
