import { createMuiTheme } from "@material-ui/core/styles";
import { purple, teal } from "@material-ui/core/colors";

// Normal or default theme
const theme = createMuiTheme({
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000"
    },
    primary: {
      main: purple[500],
      light: purple[300],
      dark: purple[700]
    },
    secondary: {
      main: teal[500]
    }
  }
});

export default theme;
