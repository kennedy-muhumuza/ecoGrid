import { specialActions } from "../reducers/specialToken";

export const storeSpecialToken = (token) => {
  return async (dispatch) => {
    await dispatch(
      specialActions.addToken({
        token: token,
      })
    );
  };
};
