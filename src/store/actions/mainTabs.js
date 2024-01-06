import { mainTabActions } from "../reducers/mainTabs";

export const setMainTab = (activeMainTab) => {
  return async (dispatch) => {
    await dispatch(
      mainTabActions.setMainTab({
        activeMainTab: activeMainTab,
      })
    );
  };
};
