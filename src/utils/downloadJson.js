import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

export const exportDataToJSON = async (collectionName) => {
  // const db = firebase.firestore();
  const collectionRef = collection(firestore, collectionName); // Replace 'yourCollection' with your actual collection name

  // Create an empty array to store the data
  let data = [];

  // Query the collection and add each document to the data array
  await getDocs(collectionRef)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      // Convert data array to JSON
      const jsonData = JSON.stringify(data);

      // Create a Blob with the JSON data
      const blob = new Blob([jsonData], { type: "application/json" });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a download link for the user
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.json";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Clean up by revoking the object URL
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
};
