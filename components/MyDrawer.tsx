import React from "react";
import { connect } from "react-redux";
import { getActionSwitchTheme, getActionSwitchDrawer } from "../actions";
import "../style.css";

import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { IconButton, Toolbar, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";

interface MyDrawerProps {
  isOpen: boolean;
}

interface MyDrawerState {
  app: {
    drawer: {
      isOpen: boolean;
    };
  };
}

class MyDrawer extends React.Component<MyDrawerProps, MyDrawerState> {
  render() {
    return (
      <div
        className={
          this.props.isOpen == true ? "MyDrawerOpen" : "MyDrawerClosed"
        }
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state: MyDrawerState, ownProps: MyDrawerProps) => {
  const result = {
    isOpen: state.app.drawer.isOpen
  };
  return result;
};

export default connect(mapStateToProps)(MyDrawer);
