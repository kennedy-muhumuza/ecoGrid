import { histTabActions } from "../reducers/histTabs";

export const setHistTab = (activeHistTab) => {
  return async (dispatch) => {
    await dispatch(
      histTabActions.setHistTab({
        activeHistTab: activeHistTab,
      })
    );
  };
};
