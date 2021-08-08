import { IAction, ACTION_SWITCH_THEME, ACTION_SWITCH_DRAWER } from "../actions";
import getTheme from "../themes/base";
import _ from "lodash";

export interface AppState {
  theme: {
    themeName: string;
    themeCss: object;
  };
  drawer: {
    isOpen: boolean;
  };
}

export function defaultState() {
  const themeName = "normal";
  return {
    theme: {
      themeName: themeName,
      themeCss: getTheme(themeName)
    },
    drawer: {
      isOpen: null
    }
  };
}

function rApp(state: AppState = defaultState(), action: IAction): AppState {
  let result = state;
  switch (action.type) {
    case ACTION_SWITCH_THEME:
      result = _.cloneDeep(state);
      const themeName = state.theme.themeName == "dark" ? "normal" : "dark";
      result.theme = {
        themeName: themeName,
        themeCss: getTheme(themeName)
      };
      console.log(action.type, themeName);
      break;
    case ACTION_SWITCH_DRAWER:
      result = _.cloneDeep(state);
      const isOpen = state.drawer.isOpen ? false : true;
      result.drawer = {
        isOpen: isOpen
      };
      console.log(action.type, result.drawer);
      break;
    default:
      console.log(action.type, result);
  }
  return result;
}

export default rApp;
