import { registerActions } from "../reducers/register";

export const updateStep1 = (id, email, password) => {
  return async (dispatch) => {
    await dispatch(
      registerActions.updateStep1({
        id: id,
        email: email,
        password: password,
      })
    );
  };
};

export const updateStep2 = (contact, country, userName) => {
  return async (dispatch) => {
    await dispatch(
      registerActions.updateStep2({
        contact: contact,
        country: country,
        userName: userName,
      })
    );
  };
};
export const updateStep3 = (
  education,
  jobTitle,
  organization,
  yearsOfExperience
) => {
  return async (dispatch) => {
    await dispatch(
      registerActions.updateStep3({
        education: education,
        jobTitle: jobTitle,
        organization: organization,
        yearsOfExperience: yearsOfExperience,
      })
    );
  };
};
