import styled from "styled-components";
import { useLocation } from "react-router-dom";
import userIcon from "/user.jpg";
import { BeatLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

import LogoutDropDown from "../../ui/drop_downs/logout_drop_down/LogoutDropDown";
// import { RiLogoutBoxRLine } from "react-icons/ri";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  top: 0;
  margin-right: 0;
  padding: 0 4rem;
  /* gap: 37rem; */
  background-color: var(--color-grey-0);
  background-color: var(--bg-color-300);
  color: var(--color-grey-100);
  height: 60px;
  border-bottom: 1px solid var(--color-grey-100);
`;
const StyledLogoContainer = styled.div`
  /* margin-right: 100px; */
  display: flex;
  gap: 0.8rem;
`;
const StyledImg = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
function Header() {
  const [isLoading, setIsLoading] = useState();
  const [newUserName, setNewUserName] = useState("");
  const userName = useSelector((state) => state.auth?.userName);
  const newUserId = useSelector((state) => state.token?.userId);
  console.log("new userId from store", newUserId);
  const colletionRef = doc(firestore, "users", newUserId);
  // const colletionRef = firestore().collection("users").doc(newUserId);

  useEffect(() => {
    const getTestData = async () => {
      try {
        setIsLoading(true);
        const docSnap = await getDoc(colletionRef);

        if (docSnap.exists) {
          const data = await docSnap.data();
          const newUserName = data.userName;
          setNewUserName(newUserName);
          console.log("NEW USERNAME:", newUserName);
          console.log("Document data:", data);
          setIsLoading(false);
        } else {
          setIsLoading(false);

          console.log("No such document!");
          // toast.error("No such document!");
        }
      } catch (e) {
        console.log("Error getting cached document:", e);
        // toast.error(e.message);
      }
    };
    getTestData();
  }, []);

  const location = useLocation();

  let title = "";
  switch (location.pathname) {
    case "/blogs":
      title = "Dashboard";
      break;
    case "/blogs/stations":
      title = "Stations";
      break;
    case "/blogs/historical-data":
      title = "Historical Data";
      break;
    case "/blogs/real-time-data":
      title = "Real time Data";
      break;
    case "/blogs/predictions":
      title = "Predictions";
      break;
    case "/blogs/generation":
      title = "Power generation";
      break;
    case "/blogs/distribution":
      title = "Power distribution";
      break;
    case "/blogs/usage":
      title = "Power Usage";
      break;
    case "/blogs/dashboard":
      title = "Dashboard";
      break;
    case "/blogs/users":
      title = "Users";
      break;
    case "/blogs/customers":
      title = "Customers";
      break;
    case "/blogs/settings":
      title = "Settings";
      break;
    case "/blogs/management":
      title = "Management";
      break;
    case "/blogs/charging-profiles":
      title = "EV | Charging profiles";
      break;
    case "/blogs/security-report":
      title = "Station | Security Report";
      break;
    // Add more cases for other routes as needed

    default:
      title = "Page Not Found";
      break;
  }

  return (
    <StyledHeader>
      <span>{title}</span>
      <StyledLogoContainer>
        {isLoading && <BeatLoader color="#36d7b7" />}
        <span>{userName ? userName : newUserName ? newUserName : null}</span>
        <StyledImg src={userIcon} />
        <LogoutDropDown />
      </StyledLogoContainer>
    </StyledHeader>
  );
}

export default Header;
