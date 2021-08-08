import React from "react";
import { connect } from "react-redux";
import { getActionSwitchTheme, getActionSwitchDrawer } from "../actions";
import "../style.css";

import AppBar from "@material-ui/core/AppBar";

import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { IconButton, Toolbar, Typography } from "@material-ui/core";

interface MyAppBarProps {
  switchTheme: () => () => void;
  switchDrawer: () => () => void;
}

interface MyAppBarState {}

class MyAppBar extends React.Component<MyAppBarProps, MyAppBarState> {
  render() {
    return (
      <AppBar className="AppBar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.props.switchDrawer}
            // className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap /*className={classes.title}*/>
            Responsive drawer
          </Typography>
          <IconButton type="submit" onClick={this.props.switchTheme}>
            <Brightness4Icon
              style={{
                flexGrow: "1"
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state: MyAppBarState, ownProps: MyAppBarProps) => {
  return ownProps;
};

const mapDispatchToProps = (dispatch: any) => {
  const result = {
    switchTheme: () => {
      dispatch(getActionSwitchTheme());
    },
    switchDrawer: () => {
      dispatch(getActionSwitchDrawer());
    }
  };
  return result;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAppBar);
