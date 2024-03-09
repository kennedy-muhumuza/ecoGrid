import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import styles from "./Users.module.css";
import { BeatLoader } from "react-spinners";
import { exportDataToJSON } from "../../utils/downloadJson";

export const Users = () => {
  const colletionRef = collection(firestore, "users");
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        setIsLoading(true);
        const docSnap = await getDocs(colletionRef);

        if (!docSnap.empty) {
          const data = await docSnap.docs.map((doc) => doc.data());
          setUsers(data);
          console.log("data:", data);
          console.log("User data:", data);

          setIsLoading(false);
        } else {
          setIsLoading(false);

          console.log("No such document!");
        }
      } catch (e) {
        console.log("Error getting cached document:", e);
      }
    };
    getUserData();
    // console.log(tests);
  }, []);
  const searchHandler = async () => {
    try {
      setIsLoading(true);
      const docSnap = await getDocs(colletionRef);

      if (!docSnap.empty) {
        const data = await docSnap.docs.map((doc) => doc.data());

        const searchedPosts =
          searchQuery.length > 0
            ? data.filter((item) =>
                `${item.userName} ${item.email} ${item.contact} ${item.country} ${item.jobTitle} ${item.organization} ${item.createdDate} ${item.createdTime}`
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
            : users;
        setUsers(searchedPosts);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className={styles["search_container"]}>
        <div>
          <input
            placeholder="Search users"
            type="text"
            className={styles["search_users"]}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />{" "}
          <button className={styles["search_btn"]} onClick={searchHandler}>
            Search
          </button>
        </div> 

        <button
          onClick={() => exportDataToJSON("users")}
          className={styles["download"]}
        >
          DOWNLOAD
        </button>
      </div>
      {isLoading && (
        <BeatLoader color="#36d7b7" className={styles["beatloader"]} />
      )}
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>country</th>
            <th>Role</th>
            <th>Organization</th>
            <th>created date</th>
            <th>created time</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.email}>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td>{item.contact ? item.contact : item.phoneNumber}</td>
              <td>{item.country}</td>
              <td>{item.jobTitle ? item.jobTitle : item.role}</td>
              <td>{item.organization}</td>
              <td>{item.createdDate}</td>
              <td>{item.createdTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
