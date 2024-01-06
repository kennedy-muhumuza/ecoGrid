import { tokenActions } from "../reducers/token";

// const saveDataToStorage = (token) => {
//   localStorage.setItem(
//     "userData",
//     JSON.stringify({
//       token: token,
//     })
//   );
// };

export const addToken = (token, userId) => {
  return async (dispatch) => {
    await dispatch(
      tokenActions.addToken({
        token: token,
        userId: userId,
      })
    );
  };
};

export const storeToken = (token, userId) => {
  return async (dispatch) => {
    await dispatch(
      tokenActions.addToken({
        token: token,
        userId: userId,
      })
    );
    // saveDataToStorage(token);
  };
};
export const logOutToken = () => {
  localStorage.clear();
  return async (dispatch) => {
    await dispatch(tokenActions.logout());
  };
};
