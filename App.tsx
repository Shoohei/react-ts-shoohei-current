import React from "react";
import "./style.css";

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { connect } from "react-redux";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Hello from "./components/Hello";
import MyAppBar from "./components/MyAppBar";
import MyPreviousDrawer from "./components/MyPreviousDrawer";
import MyDrawer from "./components/MyDrawer";

interface AppProps {
  theme: string;
}

interface AppState {
  app: {
    theme: {
      themeName: string;
      themeCss: object;
    };
  };
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, state: AppState) {
    super(props, state);
  }

  componentDidMount() {}

  render() {
    // var column = "display: 'flex'; flex-direction: 'column'";
    return (
      <ThemeProvider theme={this.props.theme}>
        <CssBaseline />
        <div className="App">
          <MyAppBar />
          <div className="middle">
            <MyDrawer />
            <Router className="content">
              <Switch>
                <Route exact path="/" component={Hello} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
const NotFound = () => <h1>Not Found </h1>;

const mapStateToProps = (state: AppState, ownProps: AppProps) => {
  const result = {
    theme: state.app.theme.themeCss
  };
  return result;
};

export default connect(mapStateToProps)(App);
