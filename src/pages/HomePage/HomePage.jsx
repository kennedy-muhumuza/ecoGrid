// import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";
// import { Footer } from "../../ui/footer/Footer";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    // <div className={styles["container"]}>
    <div className={styles["video-background"]}>
      <video autoPlay loop muted>
        <source src="videobg.mp4" type="video/mp4" />
        {/* You can add more video formats (e.g., webm, ogg) for cross-browser compatibility */}
      </video>
      {/* <p>HomePage</p> */}
      <main className={styles["content"]}>
        <SignUp />
        {/* <Footer /> */}
      </main>
    </div>
  );
};

// const VideoBackground = () => {
//   return (
//     <div className="video-background">
//       <video autoPlay loop muted>
//         <source src="your-video.mp4" type="video/mp4" />
//         {/* You can add more video formats (e.g., webm, ogg) for cross-browser compatibility */}
//       </video>
//       <div className="content">
//         <h1>Your Content Goes Here</h1>
//         <p>This is some text on top of the video background.</p>
//       </div>
//     </div>
//   );
// };
