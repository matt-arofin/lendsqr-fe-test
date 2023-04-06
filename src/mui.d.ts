import { Theme as MuiTheme } from "@mui/material/styles";

type Theme = MuiTheme & {
  toggleColorMode: () => void;
};

