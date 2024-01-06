import { useEffect, useState } from "react";
import "./App.css";
// import { handleSubmit } from "./handleSubmit";
import { v4 as uuidv4 } from "uuid";
import { firestore } from "./firebase";
import {
  doc,
  setDoc,
  getDocs,
  serverTimestamp,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { Auth } from "./features/auth/Auth";

const App = () => {
  const colletionRef = collection(firestore, "test_data");
  const [testData, setTestData] = useState("");
  const [testTitle, setTestTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tests, setTests] = useState([]);

  // GET DATA
  useEffect(() => {
    const getTestData = async () => {
      try {
        setIsLoading(true);
        const docSnap = await getDocs(colletionRef);

        if (!docSnap.empty) {
          const data = await docSnap.docs.map((doc) => doc.data());
          setTests(data);
          console.log("Document data:", data);
          setIsLoading(false);
        } else {
          setIsLoading(false);

          console.log("No such document!");
        }
      } catch (e) {
        console.log("Error getting cached document:", e);
      }
    };
    getTestData();
    console.log(tests);
  }, []);

  // SUBMIT DATA
  const handleSubmit = async () => {
    const newTestData = {
      testData: testData,
      testTitle: testTitle,
      id: uuidv4(),
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp(),
    };

    try {
      setIsLoading(true);
      const testDataRef = doc(colletionRef, newTestData.id);
      await setDoc(testDataRef, newTestData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit();
    setTestData("");
    setTestTitle("");
  };

  // DELETE DOC
  const deleteHandler = async (testId) => {
    try {
      const testDataRef = doc(colletionRef, testId);
      console.log("deleting.....");
      console.log("testId");
      console.log(testId);

      await deleteDoc(testDataRef, testDataRef);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 style={{ color: "#333" }}>EnviRescue</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="test title"
          value={testTitle}
          onChange={(e) => setTestTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="test data"
          value={testData}
          onChange={(e) => setTestData(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      {isLoading ? <p>Loading...</p> : null}
      {tests.map((test) => (
        <div key={test.id}>
          <h2>{test.id}</h2> <h2>{test.testTitle}</h2>
          <h2>{test.testData}</h2>
          <span>{test.createdAt.toDate().toLocaleString()}</span>
          <span>
            <button onClick={() => deleteHandler(test.id)}>X</button>
            <button>Edit test</button>
          </span>
        </div>
      ))}
      <Auth />
    </>
  );
};
export default App;
