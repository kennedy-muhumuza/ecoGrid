import styles from "./SignIn.module.css";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import google from "../../assets/google.png";
import { auth, googleProvider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
// import { authenticate } from "../../store/actions/auth";
import { logIn } from "../../store/actions/auth";
import { storeToken } from "../../store/actions/token";
import { toast } from "react-hot-toast";
import { playAudio } from "../../store/actions/audio";
import { nextStep } from "../../store/actions/step";

// import { collection, getDoc } from "firebase/firestore";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showEyeIcon, setShowShowEyeIcon] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const dispatch = useDispatch();
  // const [name, setName] = useState("");

  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setShowShowEyeIcon(!showEyeIcon);
  };
  console.log(auth?.currentUser?.email);
  console.log(
    "name:",
    "dghkdv",
    "userId:",
    userId,
    "accessToken:",
    accessToken
  );
  const navigate = useNavigate();

  const signIn = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) {
        toast.error("Empty fields⛔");
        dispatch(playAudio("empty.mp3"));
        return;
      }
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log("response:", response);
          // dispatch(
          //   authenticate(
          //     response.user.accessToken,
          //     "userName",
          //     response.user.uid
          //   )
          // );
          dispatch(logIn(response.user.accessToken, response.user.uid));
          dispatch(storeToken(response.user.accessToken, response.user.uid));
          console.log("DISPATCHED");
          setUserId(response.user.uid);
          setAccessToken(response.user.accessToken);
          toast.success("Signed In successfully");
          setIsLoading(false);
          navigate("blogs", { replace: true });
          dispatch(playAudio("login2.mp3"));
        })
        .catch((error) => {
          setIsLoading(false);
          console.log("error", error.message);
          toast.error(error.message);
          dispatch(playAudio("invalid.mp3"));
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((response) => {
        console.log("response:", response);

        dispatch(logIn(response.user.accessToken, response.user.uid));
        dispatch(storeToken(response.user.accessToken, response.user.uid));
        console.log("DISPATCHED");
        setUserId(response.user.uid);
        setAccessToken(response.user.accessToken);
        toast.success("Signed In successfully");
        setIsLoading(false);
        navigate("blogs", { replace: true });
        dispatch(playAudio("login2.mp3"));
      });
      // navigate("blogs");
    } catch (err) {
      console.error(err);
    }
  };
  const signUpHandler = () => {
    dispatch(nextStep(1));
  };

  return (
    <>
      <form className={styles["form_container"]} onSubmit={signIn}>
        <h3>
          <strong>LOG IN</strong>
        </h3>

        <div className={styles["email_container"]}>
          <label>Email</label>
          <input
            type="email"
            className={styles["input_field"]}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["password_container"]}>
          <label>Password</label>
          <input
            // type="password"
            type={showPassword ? "text" : "password"}
            className={styles["input_field"]}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className={styles["login-eye-icon"]}
            onClick={handleShowPassword}
          >
            {showEyeIcon ? <EyeSlash /> : <Eye />}
          </div>
          <div>
            <input type="checkbox" className={styles["checkbox"]} />
            <label>Remember me</label>
          </div>
        </div>
        <button
          type="submit"
          className={styles["next_btn"]}
          disabled={isLoading}
        >
          {isLoading ? <BeatLoader color="#36d7b7" /> : "LOGIN"}
        </button>
        <p className={styles["forgot_pw"]}>Forgot password?</p>
        <div className={styles["or_container"]}>
          <span className={styles["or_line"]}></span>
          <span className={styles["or"]}>OR</span>
          <span className={styles["or_line"]}></span>
        </div>
        <div>
          <span className={styles["logos"]}>
            <span className={styles["google_logo"]} onClick={signInWithGoogle}>
              <img src={google} alt="fb logo" className={styles["g_logo"]} />
            </span>
            <span className={styles["fb_logo"]}>
              <img src={fb} alt="fb logo" className={styles["logo"]} />
            </span>
            <span className={styles["linked_logo"]}>
              <img src={linkedin} alt="fb logo" className={styles["logo"]} />
            </span>
          </span>
        </div>
        <div className={styles["user_container"]}>
          <p className={styles["user"]}>
            Need an account? <b onClick={signUpHandler}>SIGNUP</b>
            {/* <button onClick={logOut}>LOGOUT</button> */}
          </p>
        </div>
      </form>
    </>
  );
};
