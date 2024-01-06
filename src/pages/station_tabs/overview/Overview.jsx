import { connectorsData } from "../../../data/connectors-data";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import styles from "./Overview.module.css";

export const Overview = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedDateTo, setFormattedDateTo] = useState("");
  const [connectorData, setConnectorData] = useState([]);
  const [connector, setConnector] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const colletionRef = collection(firestore, "connectors");

  const refreshPage = () => {
    setIsLoading(true);
    window.location.reload(false);
    setIsLoading(false);
  };
  // handleSubmit();
  // }, []);
  useEffect(() => {
    const getTestData = async () => {
      try {
        setIsLoading(true);
        const docSnap = await getDocs(colletionRef);

        if (!docSnap.empty) {
          const data = docSnap.docs.map((doc) => doc.data());
          setConnectorData(data);
          // console.log("Document data:", data);
          setIsLoading(false);
        } else {
          setIsLoading(false);

          console.log("No such document!");
        }
      } catch (e) {
        console.log("Error getting cached document:", e);
        setError(e);
      }
    };
    getTestData();
  }, []);

  return (
    <>
      <div className={styles["date_container"]}>
        <select
          name="connectors"
          className={styles["connector_select"]}
          value={connector}
          onChange={(e) => setConnector(e.target.value)}
        >
          <option value="all">All connectors</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <div className={styles["from_date"]}>
          <label className={styles["label"]}>From</label>
          <input
            type="date"
            value={formattedDate}
            className={styles["date_field"]}
            onChange={(e) => setFormattedDate(e.target.value)}
          />
        </div>
        <div className={styles["to_date"]}>
          <label className={styles["label"]}>To</label>
          <input
            type="date"
            className={styles["date_field"]}
            value={formattedDateTo}
            onChange={(e) => setFormattedDateTo(e.target.value)}
          />
        </div>
        <button className={styles["download_btn"]} onClick={refreshPage}>
          Refresh
        </button>
      </div>
      {isLoading && <BeatLoader color="#36d7b7" className={styles["loader"]}/>}
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Connector</th>
            <th>Ended on</th>
            <th>Duration</th>
            <th>kWh</th>
            <th>Cost</th>
            <th>Reimbursible</th>
          </tr>
        </thead>
        <tbody>
          {!error
            ? connectorData.map((item) => (
                <tr key={item.id}>
                  <td>{item.connector}</td>
                  <td>{item.endedOn}</td>
                  <td>~{item.duration}</td>
                  <td>{item.kWh}</td>
                  <td>€{item.cost}</td>
                  <td>€{item.reimbursable}</td>
                </tr>
              ))
            : connectorsData.map((item) => (
                <tr key={item.id}>
                  <td>{item.connector}</td>
                  <td>{item.endedOn}</td>
                  <td>~{item.duration}</td>
                  <td>{item.kWh}</td>
                  <td>€{item.cost}</td>
                  <td>€{item.reimbursable}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};
