import { Action } from "redux";

export interface IAction extends Action {
  type: string;
}

// export type AppActions = IActionAddTodo | IActionSwitchTheme;

export const ACTION_SWITCH_THEME = "ACTION_SWITCH_THEME";
export interface IActionSwitchTheme extends IAction {}
export function getActionSwitchTheme(): IActionSwitchTheme {
  const result = {
    type: ACTION_SWITCH_THEME
  };
  return result;
}

export const ACTION_SWITCH_DRAWER = "ACTION_SWITCH_DRAWER";
export interface IActionSwitchDrawer extends IAction {}
export function getActionSwitchDrawer(): IActionSwitchDrawer {
  const result = {
    type: ACTION_SWITCH_DRAWER
  };
  return result;
}
