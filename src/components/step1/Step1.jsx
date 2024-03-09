import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStep1 } from "../../store/actions/register";
// import { authenticate } from "../../store/actions/auth";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { showErrorMsg } from "../../store/actions/errorMsg";
import fb from "../../assets/fb.png";
import google from "../../assets/google.png";
import linkedin from "../../assets/linkedin.png";
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import { BeatLoader } from "react-spinners";
import styles from "./Step1.module.css";
import toast from "react-hot-toast";
import { playAudio } from "../../store/actions/audio";
import { nextStep } from "../../store/actions/step";
import { storeSpecialToken } from "../../store/actions/specialToken";

export const Step1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showEyeIcon, setShowShowEyeIcon] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const step = useSelector((state) => state.step.step);

  const dispatch = useDispatch();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setShowShowEyeIcon(!showEyeIcon);
  };
  const loginHandler = () => {
    dispatch(nextStep(4));
  };

  const nextHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Empty fields⛔");
      dispatch(playAudio("empty.mp3"));
      return;
    }

    setIsLoading(true);
    dispatch(showErrorMsg(""));
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(
          "response details",
          response,
          response.user.email,
          response.user.uid,
          response.user.accessToken,
          dispatch(updateStep1(response.user.uid, email, password)),
          dispatch(storeSpecialToken(response.user.accessToken))
        );
        setIsLoading(false);
        // setStep((n) => n + 1);
        dispatch(nextStep(step + 1));
        // console.log("response:" response)
      })
      .catch((error) => {
        console.log("error", error),
          setIsLoading(false),
          // dispatch(showErrorMsg(err or.message));
          toast.error(error.message);
      });

    // });
    // console.log("response details:" response.email )
  };
  return (
    <>
      <form onSubmit={nextHandler}>
        <div className={styles["email_container"]}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            className={styles["input_field"]}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["password_container"]}>
          <label>Password</label>
          {/* {showPassword ? <EyeSlash /> : <Eye />} */}
          <input
            // type="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles["input_field"]}
          />
          <div
            className={styles["login-eye-icon"]}
            onClick={handleShowPassword}
          >
            {showEyeIcon ? <EyeSlash /> : <Eye />}
          </div>
        </div>

        <p className={styles["password_msg"]}>
          Must be 8 or more characters and contain atleast one number and 1
          special character
        </p>
        <button
          type="submit"
          className={styles["next_btn"]}
          // onClick={nextHandler}
          disabled={isLoading}
        >
          {isLoading ? <BeatLoader color="#36d7b7" /> : "NEXT"}
        </button>
        <div className={styles["or_container"]}>
          <span className={styles["or_line"]}></span>
          <span className={styles["or"]}>OR</span>
          <span className={styles["or_line"]}></span>
        </div>
        <div>
          <span className={styles["logos"]}>
            <span className={styles["google_logo"]}>
              <img
                src={google}
                alt="google logo"
                className={styles["g_logo"]}
              />
            </span>
            <span className={styles["fb_logo"]}>
              <img src={fb} alt="fb logo" className={styles["logo"]} />
            </span>
            <span className={styles["linked_logo"]}>
              <img
                src={linkedin}
                alt="linkedIn logo"
                className={styles["logo"]}
              />
            </span>
          </span>
        </div>
        <div className={styles["user_container"]}>
          <p className={styles["user"]}>
            Already a user? <b onClick={loginHandler}>LOGIN</b>
          </p>
        </div>
      </form>
    </>
  );
};
