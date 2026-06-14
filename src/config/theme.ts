// theme.ts
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    flora: {
      sage: string;
      moss: string;
      cream: string;
      paper: string;
      muted: string;
      border: string;
      softGreen: string;
    };
  }

  interface PaletteOptions {
    flora?: {
      sage?: string;
      moss?: string;
      cream?: string;
      paper?: string;
      muted?: string;
      border?: string;
      softGreen?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#A7B88A", // soft sage
      light: "#C7D3B4",
      dark: "#7E9067",
      contrastText: "#2E2B24",
    },

    secondary: {
      main: "#D6C8A7", // warm sand
    },

    background: {
      default: "#E6EDD9", // outer green tint
      paper: "#F6F1E4", // creamy panel background
    },

    text: {
      primary: "#2D2A24",
      secondary: "#625B4B",
    },

    divider: "#B8B09B",

    flora: {
      sage: "#A7B88A",
      moss: "#7C8C63",
      cream: "#F6F1E4",
      paper: "#EFE7D5",
      muted: "#CFC7B6",
      border: "#7A6F5D",
      softGreen: "#DDE7CC",
    },
  },

  typography: {
    fontFamily: `"Quicksand", "Nunito", "Trebuchet MS", sans-serif`,

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    button: {
      fontWeight: 700,
      textTransform: "none",
      letterSpacing: "0.02em",
    },

    subtitle1: {
      fontWeight: 700,
    },

    body1: {
      lineHeight: 1.5,
    },
  },

  shape: {
    borderRadius: 18,
  },

  shadows: [
    "none",
    "0 1px 2px rgba(0,0,0,0.05)",
    "0 2px 4px rgba(0,0,0,0.06)",
    "0 4px 10px rgba(0,0,0,0.08)",
    "0 6px 16px rgba(0,0,0,0.10)",
    ...Array(20).fill("0 8px 20px rgba(0,0,0,0.10)"),
  ] as any,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(180deg, #E6EDD9 0%, #DCE6CF 100%)",
          color: "#2D2A24",
        },

        "*::-webkit-scrollbar": {
          width: 10,
          height: 10,
        },

        "*::-webkit-scrollbar-thumb": {
          background: "#B6BEA3",
          borderRadius: 999,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#F6F1E4",
          border: "2px solid #7A6F5D",
          boxShadow: "0 8px 24px rgba(79, 69, 50, 0.12)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: "#EFE7D5",
          border: "2px solid #7A6F5D",
          borderRadius: 20,
          boxShadow: "0 3px 8px rgba(0,0,0,0.06)",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 14,
          paddingInline: 18,
          paddingBlock: 10,
          border: "2px solid #7A6F5D",
          textTransform: "none",
          fontWeight: 700,
        },
      },

      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: "#B7C89B",
            color: "#2D2A24",

            "&:hover": {
              background: "#A7B88A",
            },
          },
        },

        {
          props: { variant: "outlined" },
          style: {
            background: "#F3EAD8",
            borderColor: "#8B806D",
          },
        },
      ],
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#EDE6D6",
          borderRight: "2px solid #8B806D",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          marginInline: 8,

          "&.Mui-selected": {
            backgroundColor: "#B7C89B",
            border: "2px solid #8B806D",

            "&:hover": {
              backgroundColor: "#A7B88A",
            },
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#D9E5C6",
          border: "1px solid #8B806D",
          color: "#2D2A24",
          fontWeight: 700,
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: "#F7F2E7",
            borderRadius: 14,

            "& fieldset": {
              borderColor: "#8B806D",
              borderWidth: 2,
            },

            "&:hover fieldset": {
              borderColor: "#7C8C63",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#A7B88A",
            },
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#7C8C63",
          height: 4,
          borderRadius: 999,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          color: "#625B4B",

          "&.Mui-selected": {
            color: "#2D2A24",
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#F3EAD8",
          color: "#2D2A24",
          border: "2px solid #8B806D",
          fontSize: "0.9rem",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap: 8,
          padding: 4,
          borderRadius: 14,
          background: "#E7DEC9",
          border: "2px solid #8B806D",
        },

        grouped: {
          margin: 0,
          border: "none !important",
          borderRadius: "10px !important",

          "&:not(:first-of-type)": {
            borderRadius: "10px !important",
          },

          "&:first-of-type": {
            borderRadius: "10px !important",
          },
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "#4E463B",
          paddingInline: 16,
          paddingBlock: 6,
          borderRadius: 10,
          border: "1px solid transparent",
          background: "transparent",

          "&:hover": {
            background: "#DCE7C8",
          },

          "&.Mui-selected": {
            background: "#B7C89B",
            color: "#2D2A24",
            border: "1px solid #7A6F5D",

            "&:hover": {
              background: "#A7B88A",
            },
          },
        },
      },
    },
  },
});

export { theme };
