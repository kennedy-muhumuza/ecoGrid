import { tabActions } from "../reducers/tabs";

const saveTabToStorage = (activeTab) => {
  localStorage.setItem(
    "tabData",
    JSON.stringify({
      activeTab: activeTab,
    })
  );
};

export const setTab = (activeTab) => {
  return async (dispatch) => {
    await dispatch(
      tabActions.setTab({
        activeTab: activeTab,
      })
    );
    saveTabToStorage(activeTab);
  };
};
