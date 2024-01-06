import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Step3.module.css";
import { updateStep3 } from "../../store/actions/register";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { firestore } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { BeatLoader } from "react-spinners";
import { authenticate, logIn } from "../../store/actions/auth";
import { toast } from "react-hot-toast";
import { nextStep } from "../../store/actions/step";
import { playAudio } from "../../store/actions/audio";
import { storeToken } from "../../store/actions/token";

// import { v4 as uuidv4 } from "uuid";
// import { auth, createUserWithEmailAndPassword } from "../../firebase";

export const Step3 = () => {
  const [education, setEducation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const password = useSelector((state) => state.register.password);
  const email = useSelector((state) => state.register.email);
  const userObject = useSelector((state) => state.register);
  const token = useSelector((state) => state.special.token);
  const step = useSelector((state) => state.step.step);
  const dispatch = useDispatch();

  console.log("USER ID", userObject.id, "USER TOKEN", token, email);

  console.log("user");
  console.log(userObject);
  const userName = userObject.userName;
  const id = userObject.id;
  const newUser = {
    id: userObject.id,
    email: email,
    contact: userObject.contact,
    country: userObject.country,
    userName: userObject.userName,
    education: education,
    jobTitle: jobTitle,
    organization: organization,
    yearsOfExperience: yearsOfExperience,
    createdDate: new Date().toDateString(),
    createdTime: new Date().toLocaleTimeString(),
  };
  const docRef = doc(firestore, "users", userObject.id);

  const backHandler = () => {
    dispatch(nextStep(step - 1));
  };
  const signUpHandler = async (e) => {
    try {
      e.preventDefault();
      if (!education || !jobTitle || !organization || !yearsOfExperience) {
        toast.error("Empty fields⛔");
        // dispatch(showErrorMsg("Empty fields⛔"));
        return;
      }
      setIsLoading(true);
      dispatch(
        updateStep3(education, jobTitle, organization, yearsOfExperience)
      );
      // dispatch(showErrorMsg(""));
      // const { user } = await auth.createUserWithEmailAndPassword(

      await setDoc(docRef, newUser)
        .then((response) => {
          console.log(
            "A New Document Field has been added to an existing document"
          );
          console.log("response");
          console.log(response);
          // setStep((n) => n + 1);
          dispatch(authenticate(token, userName, id));
          dispatch(logIn(token, id));
          dispatch(storeToken(token, id));
          // dispatch(storeToken(response.user.accessToken, response.user.uid));

          setIsLoading(false);
          toast.success("Signed up successfully");
          navigate("blogs", { replace: true });
          dispatch(playAudio("signup.mp3"));
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          toast.error(error.message);
          dispatch(playAudio("signuperror.mp3"));
        });
      // await user.updateProfile({
      //   displayName: email,
      // });
      // await firestore.collection("users").doc(user.uid).set(newUser);
      // console.log("before_setstep");
      console.log("next");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <form className={styles["form_container"]}>
        <div className={styles["field_container"]}>
          <label>Education</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className={styles["input_field"]}
          />
        </div>
        <div className={styles["field_container"]}>
          <label>Role</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className={styles["input_field"]}
          />
        </div>
        <div className={styles["field_container"]}>
          <label>Organization</label>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className={styles["input_field"]}
          />
        </div>
        <div className={styles["field_container"]}>
          <label>Years of Experience</label>
          <input
            type="text"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            className={styles["input_field"]}
          />
        </div>
        <div className={styles["back"]}>
          <button onClick={signUpHandler} className={styles["signup_btn"]}>
            {isLoading ? <BeatLoader color="#36d7b7" /> : "SIGNUP"}
          </button>
          <Link onClick={backHandler}>Back</Link>
        </div>
      </form>
    </>
  );
};
