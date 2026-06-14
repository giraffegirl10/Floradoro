import { Card, CardContent, CardHeader, Typography } from "@mui/material";

type PlantDetailsProps = { open?: boolean };
export default function PlantDetails({ open }: PlantDetailsProps) {
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
        <Typography>Here are the details about the selected plant.</Typography>
      </CardContent>
    </Card>
  );
}
