import { predActions } from "../reducers/pred";

export const setPred = (activePred) => {
  return async (dispatch) => {
    await dispatch(
      predActions.setPred({
        activePred: activePred,
      })
    );
  };
};
