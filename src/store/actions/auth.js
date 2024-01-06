import { authActions } from "../reducers/auth";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../../firebase";
// import { setPersist } from "./firebaseConfig";
// import { googleProvider } from "../../firebase";

export const createUser = () => {};

// export const signInWithGoogle = () => async (dispatch) => {
//   try {
//     await setPersist(); // Set local persistence
//     const user = await auth.signInWithPopup(googleProvider);
//     // Dispatch an action with the user data
//     dispatch({ type: "SIGN_IN", payload: user });
//   } catch (error) {
//     console.error(error);
//   }
// };
const saveDataToStorage = (token, userName, userId) => {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userName: userName,
      userId: userId,
    })
  );
};

const saveLoginDataToStorage = (token, userId) => {
  localStorage.setItem(
    "userLoginData",
    JSON.stringify({
      token: token,
      userId: userId,
    })
  );
};
export const authenticate = (token, userName, userId) => {
  return async (dispatch) => {
    await dispatch(
      authActions.authenticate({
        token: token,
        userName: userName,
        userId: userId,
      }) 
    );
    saveDataToStorage(token, userName, userId);
  };
};

export const logIn = (token, userId) => {
  return async (dispatch) => {
    await dispatch(
      authActions.authenticate({
        token: token,
        userId: userId,
      })
    );
    saveLoginDataToStorage(token, userId);
  };
};

export const logOut = () => {
  localStorage.clear();
  return async (dispatch) => {
    await dispatch(authActions.logout());
  };
};
