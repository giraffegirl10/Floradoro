import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

import type { SvgIconComponent } from "@mui/icons-material";

import type { Rarity } from "../types/plant";

export const RARITY_CONFIG: Record<
  Rarity,
  {
    color: string;
    icon: SvgIconComponent;
  }
> = {
  common: {
    color: "#9e9e9e",
    icon: CircleRoundedIcon,
  },

  rare: {
    color: "#2196f3",
    icon: DiamondRoundedIcon,
  },

  epic: {
    color: "#9c27b0",
    icon: AutoAwesomeRoundedIcon,
  },

  legendary: {
    color: "#ffab00",
    icon: StarRoundedIcon,
  },
};
