import { Step1 } from "../step1/Step1";
import { Step2 } from "../step2/Step2";
import { Step3 } from "../step3/Step3";
import { Step } from "../steps/Step";
import styles from "./SignUp.module.css";
import { SignIn } from "../SignIn/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../../store/actions/step";

export const SignUp = () => {
  // const [step, setStep] = useState(1);
  const step = useSelector((state) => state.step.step);

  // const isError = useSelector((state) => state.errorMsg.isError);
  // const errorMsg = useSelector((state) => state.errorMsg.error);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(nextStep(4));
  };
  return (
    <>
      {/* {errorMsg ? <p className={styles["error_msg"]}>{errorMsg}</p> : null} */}

      <div className={styles["form_container"]}>
        {step < 4 && (
          <div className={styles["links"]}>
            <span>
              <strong>SIGN UP</strong>
            </span>
            <span onClick={loginHandler} className={styles["login"]}>
              <strong>LOGIN</strong>
            </span>
          </div>
        )}
        {step < 4 && <Step />}
        {step < 2 && <Step1 />}
        {step == 2 && <Step2 />}
        {step == 3 && <Step3 />}
        {step > 3 && <SignIn />}
      </div>
    </>
  );
};
