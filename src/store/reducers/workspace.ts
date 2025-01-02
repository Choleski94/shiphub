import * as actionTypes from "../types";

export interface IRoleState {
  id: string;
  name: string;
};

export interface IWorkspaceState {
  id: string;
  name: string;
  removed: boolean;
  enabled: boolean;
  role: IRoleState;
  createdAt: string;
  invitedBy: any | null;
};

export const workspaceState: IWorkspaceState = {
  id: "",
  name: "",
  createdAt: "",
  removed: false,
  enabled: false,
  invitedBy: null,
  role: { id: "", name: "" },
};

const workspaceReducer = (state: IWorkspaceState = workspaceState, action) => {
  switch (action.type) {
    case actionTypes.WORKSPACE_RESET:
      return workspaceState;
    case actionTypes.WORKSPACE_SET:
      return { ...state, ...action.workspace };
    case actionTypes.WORKSPACE_FETCHED:
      return { ...state, ...action.workspace };
    default:
      return state;
  }
};

export default workspaceReducer;
