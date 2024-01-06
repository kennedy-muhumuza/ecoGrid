import { errorMsgActions } from "../reducers/errorMsg";

export const hideErrorMsg = () => {
  return async (dispatch) => {
    await dispatch(errorMsgActions.hideErrorMsg());
  };
};

export const showErrorMsg = (error) => {
  return async (dispatch) => {
    await dispatch(
      errorMsgActions.showErrorMsg({
        error: error,
      })
    );
  };
};
