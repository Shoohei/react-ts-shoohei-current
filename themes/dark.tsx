import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";

// Dark theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      white: "#000000",
      black: "#ffffff"
    },
    primary: {
      main: grey[900],
      contrastText: purple[300]
    },
    secondary: {
      main: teal[200]
    }
  }
});

export default theme;
