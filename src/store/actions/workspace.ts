import * as actionTypes from "../types";

export const workspaceReset = () => ({
  type: actionTypes.WORKSPACE_RESET,
});

export const workspaceSet = (workspace) => {
  return {
    type: actionTypes.WORKSPACE_SET,
    workspace,
  };
};

export const workspaceFetched = (workspace) => ({
  type: actionTypes.WORKSPACE_FETCHED,
  workspace,
});
