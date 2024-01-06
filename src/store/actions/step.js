import { stepActions } from "../reducers/step";

export const nextStep = (step) => {
  return async (dispatch) => {
    await dispatch(
      stepActions.nextStep({
        step: step,
      })
    );
  };
};
