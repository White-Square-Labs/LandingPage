import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import type { Theme, ThemeOptions } from "@mui/material/styles";
import { SalvatoreRoman } from "./fonts";

const inputHeight = "36px"; // TODO this should be a theme variable

const customPxToRem = (size: number): string => {
  const fontSize = 14,
    htmlFontSize = 16,
    coef = fontSize / 14;

  return `${(size / htmlFontSize) * coef}rem`;
};

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    simple: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    paper: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    extraSmall: true;
  }
}

declare module "@mui/material/styles" {
  interface CustomPalette {
    secondaryBackground?: {
      default?: string;
      paper?: string;
    };
    dividerBold?: string;
    paper: {
      main: string;
      light: string;
    };
    tertiary: {
      main: string;
    };
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const fontFamily = SalvatoreRoman.style.fontFamily;

const dark = {
  primary: {
    main: "#ffffff",
    contrastText: "#1c2634",
  },
  secondary: {
    main: "#5E9DF1",
    light: "#548ce4",
    contrastText: "#ffffff",
  },
  tertiary: {
    main: "#F6B436",
  },
  background: {
    default: "#283549",
    paper: "#1c2634",
  },
  paper: {
    main: "#1c2634",
    light: "#1C2837",
  },
  secondaryBackground: {
    default: "#222f42",
    paper: "#46505d",
  },
  text: {
    secondary: "#bec2c8",
  },
  success: {
    main: "#40AB0C",
  },
  error: {
    main: "#C23F38",
  },
  divider: "#7B849C",
  dividerBold: "#B0B8CB",
};

const light = {
  primary: {
    main: "#1c2634",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#106fe2",
    light: "#548ce4",
    contrastText: "#ffffff",
  },
  tertiary: {
    main: "#F6B436",
  },
  background: {
    default: "#f3f3f3",
    paper: "#ffffff",
  },
  paper: {
    main: "#ffffff",
    light: "#fcfcfc",
  },
  secondaryBackground: {
    default: "#f6f6f6",
    paper: "#ececf3",
  },
  text: {
    secondary: "#5d5f61",
  },
  divider: "#a4a4a6",
  dividerBold: "#a6a7ab",
};

// Create a theme instance.
// @see https://mui.com/material-ui/customization/default-theme/
export const baseTheme: ThemeOptions = {
  typography: {
    fontFamily,
    h1: {
      fontSize: customPxToRem(40),
      fontFamily: fontFamily,
    },
    h2: {
      fontSize: customPxToRem(28),
    },
    h3: {
      fontSize: customPxToRem(22),
    },
    h4: {
      fontSize: customPxToRem(20),
    },
    h5: {
      fontSize: customPxToRem(18),
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: "relative",
          "@media (min-width: 900px)": {
            backgroundImage: `url('/images/background-top.svg')`,
            backgroundSize: "210px 120px",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: 0,
          paddingRight: 0,

          [theme.breakpoints.up("lg")]: {
            paddingLeft: 0,
            paddingRight: 0,
            maxWidth: 1500,
          },
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: theme.typography.pxToRem(15),
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-focused": {
            ".MuiInputBase-input, .MuiInputSelect-select": {
              borderColor: theme.palette.secondary.main,
              borderRadius: `${theme.shape.borderRadius}px`,
            },
            ".MuiInputAdornment-root": {
              borderColor: theme.palette.secondary.main,
            },
          },

          "&.Mui-error": {
            ".MuiInputBase-input, .MuiInputSelect-select": {
              borderColor: theme.palette.error.main,
              borderRadius: `${theme.shape.borderRadius}px`,
            },
            ".MuiInputAdornment-root": {
              borderColor: theme.palette.error.main,
            },
          },

          "&:before, &:after": {
            display: "none",
          },
          ".MuiFormLabel-root+&": {
            marginTop: theme.spacing(0.5),
          },
          "&.MuiInputBase-adornedEnd .MuiInputBase-input": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: "none",
          },
          ".MuiInputAdornment-root": {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
            height: inputHeight,
            maxHeight: "100%",
            margin: 0,
          },
          ".MuiIconButton-root": {
            borderRadius: 0,
            height: "100%",
            marginRight: 0,
            ".MuiSvgIcon-root": {
              color: theme.palette.divider,
            },
          },
        }),
        input: ({ theme }) => ({
          borderColor: theme.palette.divider,
          borderRadius: `${theme.shape.borderRadius}px`,
          background: theme.palette.background.default,
          padding: theme.spacing(1),
          height: inputHeight,
          boxSizing: "border-box",
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.variant === "standard" && {
            ".MuiInputLabel-root": {
              position: "static",
              background: "none",
              transform: "none",
              width: "100%",
            },
            ".MuiInputBase-root": {
              marginTop: theme.spacing(0.5),
            },
            ".MuiInputBase-input": {
              borderStyle: "solid",
              borderWidth: "1px",
            },
            ".MuiInputAdornment-root .MuiIconButton-root .MuiSvgIcon-root": {
              color: theme.palette.action.active,
            },
          }),
        }),
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
        IconComponent: KeyboardArrowDownIcon,
      },
      styleOverrides: {
        select: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          height: inputHeight,
          minHeight: "0",
        }),
        icon: ({ theme }) => ({
          fontSize: theme.typography.pxToRem(18),
          right: theme.spacing(0.5),
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          verticalAlign: "unset",
          ".MuiFormLabel-root": {
            position: "static",
            transform: "none",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& th": {
            color: theme.palette.text.secondary,
            fontSize: theme.typography.pxToRem(12),
          },
        }),
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& td": {
            fontSize: theme.typography.pxToRem(14),
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.default,
          borderColor: theme.palette.divider,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          height: inputHeight,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: ({ theme }) => ({
          background: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          "&:hover": {
            background: theme.palette.secondary.light,
          },
        }),
        containedSecondary: ({ theme }) => ({
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            background: theme.palette.primary.dark,
          },
        }),
        outlined: ({ theme }) => ({
          color: theme.palette.primary.main,
          borderColor: theme.palette.dividerBold,
          background: theme.palette.secondaryBackground?.default,
          "&:hover": {
            background: theme.palette.background.paper,
          },
        }),
        sizeMedium: {
          height: "48px",
        },
      },
      variants: [
        {
          props: { color: "paper" },
          style: ({ theme }) => ({
            color: theme.palette.primary.main,
            background: theme.palette.background?.paper,
            "&:hover": {
              background: theme.palette.background?.default,
            },
          }),
        },
      ],
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiFormControlLabel-labelPlacementEnd .MuiFormControlLabel-label":
            {
              marginLeft: theme.spacing(1),
            },
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 46,
          height: 22,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 2,
            margin: 0,
            "&.Mui-checked": {
              transform: "translateX(24px)",
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.secondary.main,
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              border: "6px solid #fff",
            },
            "&.Mui-disabled + .MuiSwitch-track, &.Mui-disabled .MuiSwitch-thumb":
              {
                opacity: 0.5,
              },
          },
          "& .MuiSwitch-thumb": {
            width: 18,
            height: 18,
            boxShadow: "none",
            background: theme.palette.primary.main,
          },
          "& .MuiSwitch-track": {
            borderRadius: 11,
            border: `1px solid ${theme.palette.text.secondary}`,
            opacity: 1,
            backgroundColor: theme.palette.background.paper,
            transition: ".3s",
          },
        }),
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "simple" },
          style: {
            background: "background.paper",
          },
        },
      ],
    },
    MuiMenu: {
      styleOverrides: {
        root: ({ theme }) => ({
          ".MuiPaper-root": {
            boxShadow: "none",
            border: `1px solid ${theme.palette.secondary.main}`,
            background: theme.palette.secondaryBackground?.default,
          },
          ".MuiList-root": {
            padding: 0,
          },
          ".MuiButtonBase-root": {
            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
            fontSize: theme.typography.pxToRem(15),
            "&:hover": {
              background: theme.palette.background.paper,
            },
          },
        }),
      },
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: "extraSmall" },
          style: {
            fontSize: "1rem",
          },
        },
      ],
    },
  },
};

export let lightTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    ...light,
    mode: "light",
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export let darkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    ...dark,
    mode: "dark",
  },
});

darkTheme = responsiveFontSizes(darkTheme);
