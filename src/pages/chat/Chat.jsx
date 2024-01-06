import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Chat.module.css";
import styled from "styled-components";
import userIcon from "/user.jpg";

import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";
import { collection, query, orderBy, limit, addDoc } from "firebase/firestore";

const StyledImg = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
const Chat = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles["app"]}>
      <header className={styles["header"]}>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section className={styles["main"]}>{user ? <ChatRoom /> : null}</section>
    </div>
  );
};

export default Chat;

function SignOut() {
  return (
    auth.currentUser && (
      <button className={styles["sign-out"]} onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  // const messagesRef = doc(firestore, "messages");
  const messagesRef = collection(firestore, "messages");

  const dummy = useRef();
  // const messagesRef = firestore.collection("messages");
  // const query = messagesRef.orderBy("createdAt").limit(25);
  // const queryRef = query(messagesRef, orderBy("createdAt").limit(25));
  const queryRef = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(queryRef, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(collection(firestore, "messages"), {
      text: formValue,
      // createdAt: firestore.FieldValue.serverTimestamp(),
      createdAt: new Date().toISOString(),
      uid,
      photoURL,
    });

    // await messagesRef.add({
    //   text: formValue,
    //   // createdAt: firestore.FieldValue.serverTimestamp(),
    //   createdAt: new Date().toISOString(),
    //   uid,
    //   photoURL,
    // });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className={styles["main_section"]}>
        <ul className={styles["list_msgs"]}>
          {messages &&
            messages.map((msg, index) => (
              <li key={index} className={styles["list_msg"]}>
                <ChatMessage message={msg} />
              </li>
            ))}
        </ul>

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className={styles["form_input"]}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something to us"
          className={styles["input_field"]}
        />

        <button type="submit" disabled={!formValue} className={styles["btn"]}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`${styles[`message ${messageClass}`]}`}>
        {props.message && photoURL ? (
          <img
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
          />
        ) : (
          props.message && !photoURL && <StyledImg src={userIcon} />
        )}

        <p className={styles["text"]}>{text}</p>
      </div>
    </>
  );
}
ChatMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
  }).isRequired,
};
// export default App;
