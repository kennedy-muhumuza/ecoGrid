import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* <p>Welcome to the logged in page</p> */}
        <Outlet />
      </main>
    </>
  );
};
