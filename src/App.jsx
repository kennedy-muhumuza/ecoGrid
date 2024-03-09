import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Blogs } from "./pages/blogs/Blogs";
import { Users } from "./pages/Users/Users";
import { Usage } from "./pages/usage/Usage";
import { NoPage } from "./pages/NoPage/NoPage";
import { storeToken } from "./store/actions/token";
import { authenticate } from "./store/actions/auth";
import { AppLayout } from "./ui/appLayout/AppLayout";
import { Accounts } from "./pages/Accounts/Accounts";
import { Stations } from "./pages/stations/Stations";
import { RealTime } from "./pages/realtime/RealTime";
import { HomePage } from "./pages/HomePage/HomePage";
import { Settings } from "./pages/settings/Settings";
import { useDispatch, useSelector } from "react-redux";
import { Customers } from "./pages/customers/Customers";
import { Historical } from "./pages/historical/Historical";
import { Management } from "./pages/Management/Management";
import { Generation } from "./pages/generation/Generation";
import { Predictions } from "./pages/predictions/Predictions";
import { Distribution } from "./pages/distribution/Distribution";
import { ChargingProfiles } from "./pages/charging_profiles/ChargingProfiles";
// import { ChargingProfile } from "./pages/station_tabs/charging_profile/ChargingProfile";
import { SecurityReport } from "./pages/station_tabs/security_report/SecurityReport";
import { Notification } from "./pages/Notification/Notification";
import { Profile } from "./pages/profile/Profile";
import "./App.css";
import { Main } from "./pages/main/Main";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isSignedIn = useSelector((state) => state.token.isSignedIn);

  const userDataFromStorage = JSON.parse(localStorage.getItem("userData"));
  const userLoginDataFromStorage = JSON.parse(
    localStorage.getItem("userLoginData")
  );

  const navigationTypeReload =
    performance.getEntriesByType("navigation")[0].type === "reload";

  // update the redux store on page reload
  if (navigationTypeReload && userDataFromStorage) {
    const { token, userName, userId } = userDataFromStorage;
    dispatch(authenticate(token, userName, userId));
  }
  if (navigationTypeReload && userLoginDataFromStorage) {
    const { token, userId } = userLoginDataFromStorage;
    dispatch(storeToken(token, userId));
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!isLoggedIn && !isSignedIn && (
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route exact path="/" element={<HomePage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          )}
          {(isLoggedIn || isSignedIn) && (
            <>
              <Route path="blogs" element={<Blogs />}>
                <Route index element={<Main />} />
                <Route path="dashboard" element={<Main />} />
                <Route path="accounts" element={<Accounts />} />
                <Route path="management" element={<Management />} />
                <Route path="customers" element={<Customers />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
                <Route path="historical-data" element={<Historical />} />
                <Route path="real-time-data" element={<RealTime />} />
                <Route path="predictions" element={<Predictions />} />
                <Route path="security-report" element={<SecurityReport />} />
                <Route path="notification" element={<Notification />} />
                <Route path="profile" element={<Profile />} />
                <Route path="generation" element={<Generation />} />
                <Route path="distribution" element={<Distribution />} />
                <Route path="usage" element={<Usage />} />
                <Route path="stations" element={<Stations />} />
                <Route
                  path="charging-profiles"
                  element={<ChargingProfiles />}
                />
                <Route path="*" element={<Main />} />
                {/* <Route path="charging-profiles" element={<ChargingProfile />} /> */}
                {/* <Route path="*" element={<AdminPage />} /> */}
              </Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 2000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </div>
  );
};
export default App;
