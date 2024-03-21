import { useState, useRef, useEffect } from "react";
import styles from "./Chat.module.css";
// import { firestore } from "../firebase";
// import { PiTextOutdentBold } from "react-icons/pi";
// import { MdRecordVoiceOver } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FaMicrophoneLinesSlash } from "react-icons/fa6";
import { botJsonData } from "../data/bot_json_data";

import { v4 as uuidv4 } from "uuid";
import ai from "/aipic.jpg";
// import { useSelector } from "react-redux";

const Chat = ({ setBotActive }) => {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      bot: "Hello human! I am your ever present AI assistant ready to help you out on anything regarding this site. Let me know if you need someone to talk to.",
      user: "",
    },
  ]);
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [botState, setBotState] = useState("voiced");

  const [newMessage, setNewMessage] = useState("");
  const messagesRef = useRef();
  // const colletionRef = collection(firestore, "seg_bot");

  const [active, setActive] = useState("voice");

  const handleBotState = () => {
    if (botState === "voiced") setBotState("text");
    else setBotState("voiced");
    console.log("botstate", botState);
  };

  // const darkMode = useSelector((state) => state.darkMode.darkMode);

  // Create a new SpeechSynthesisUtterance object outside the function
  let recognition;
  var msg = new SpeechSynthesisUtterance();

  // Listen for the voiceschanged event before fetching voices
  speechSynthesis.onvoiceschanged = function () {
    // Get the list of available voices
    var voices = window.speechSynthesis.getVoices();

    // Select a desired voice (you can customize this part)
    // var desiredVoice = voices.find(
    //   (voice) => voice.voiceURI === "Google US English"
    // );

    var desiredVoice =
      voices.find(
        (voice) =>
          voice.voiceURI.includes("Google") &&
          voice.name === "Google US English"
      ) ||
      voices.find(
        (voice) =>
          voice.voiceURI.includes("Google") &&
          voice.name.includes("Female") &&
          voice.lang.includes("en-US")
      ) ||
      voices.find((voice) => voice.voiceURI === "Google US English");

    // var desiredVoice = voices.find(
    //   (voice) =>
    //     voice.voiceURI.includes("Google") && voice.name === "Google US English"
    // );

    // Set the selected voice
    msg.voice = desiredVoice;
  };

  const talk = (response, onComplete) => {
    // Check for Speech Synthesis support
    if ("speechSynthesis" in window) {
      // var msg = new SpeechSynthesisUtterance();
      msg.text = response;

      // Listen for the end event before executing the callback
      msg.onend = () => {
        if (onComplete && typeof onComplete === "function") {
          onComplete();
        }
      };

      speechSynthesis.speak(msg);
    } else {
      console.error("Speech synthesis not supported in this browser.");
    }
  };

  const extractCity = (command) => {
    const locationKeywords = ["in", "at", "for"];

    for (const keyword of locationKeywords) {
      const pattern = new RegExp(`${keyword}\\s(\\w+)`, "i");
      const match = command.match(pattern);

      if (match) {
        return match[1];
      }
    }

    return "kampala"; // Default city if no match is found
  };

  const getWeather = async (city) => {
    const API_KEY = "349c27f24aeee03e34affd43ad60e8ce";
    const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

    const queryParams = new URLSearchParams({
      q: city,
      appid: API_KEY,
    });

    const url = `${BASE_URL}?${queryParams}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const weatherData = await response.json();
        return weatherData;
      } else {
        console.error("Error fetching weather data:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      return null;
    }
  };

  function randomString() {
    const randomList = [
      "Oops, seems I lost track of what you just said.",
      "Oh! It appears you spoke something I don't understand yet. Do you mind rephrasing",
      "I'm terribly sorry dear, I didn't quite catch that. What do you mean?",
    ];

    const listCount = randomList.length;
    const randomItem = Math.floor(Math.random() * listCount);

    return randomList[randomItem];
  }

  function extractUserName(inputString) {
    const namePattern = /(?:I\s+am\s+called|My\s+name\s+is)\s+([^\s.,;?!]+)/i;
    const match = inputString.match(namePattern);
    return match ? match[1] : null;
  }
  const introduceUser = (userInput) => {
    // const nameRegex =
    //   /(?:hey\s*ecoGrid\s*,?\s*say\s*(?:hi|hello)\s*to\s*|say\s*(?:hi|hello)\s*to\s*\s*)(\w+)/i;
    const nameRegex =
      /(?:hey\s*(?:say\s*)?(?:hi|hello)\s*to\s*|say\s*(?:hi|hello)\s*to\s*\s*)(\w+)/i;

    const match = userInput.match(nameRegex);
    return match ? match[1] : null;
  };

  function calculateResponse(inputString) {
    const splitMessage = inputString.toLowerCase().split(/\s+|[,;?!.-]\s*/);
    const scoreList = [];

    const introducedUserName = introduceUser(inputString);
    const userName = extractUserName(inputString);
    // If a name is found in the user input, generate a response
    if (introducedUserName) {
      const name = introducedUserName;
      // const responses = [
      // `Hey ${name}, it's nice knowing you. I am the EcoGrid assistant and I am here to help with all matters regarding the EcoGrid system.`,
      // `Hey ${name}, it's great to meet you. I'm the EcoGrid assistant, ready to assist you with anything related to managing data generated from renewables or its storage and distribution.`,
      //   // Add more creative responses here
      // ];
      const responses = [
        `Hey ${name}, it's nice knowing you. I am the EcoGrid assistant and I am here to help with all matters regarding the EcoGrid system.`,
        `Hey ${name}, it's great to meet you. I'm the EcoGrid assistant, ready to assist you with anything related to managing data generated from renewables or its storage and distribution.`,
        `Hey ${name}, welcome! I'm your EcoGrid companion, here to navigate you through the fascinating world of renewable energy management.`,
        `Ahoy ${name}! It's a pleasure to make your acquaintance. I'm the EcoGrid genie, granting your wishes for sustainable energy management.`,
        `Greetings ${name}! I'm the EcoGrid guru, here to enlighten you on all things related to harnessing the power of renewables.`,
        `Salutations ${name}! As your EcoGrid ally, I'm here to tackle any challenges you may face in the realm of renewable energy optimization.`,
        `Hello ${name}, delighted to meet you! I'm the EcoGrid virtuoso, orchestrating the symphony of renewable energy solutions.`,
      ];

      // Randomly select a response from the array
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      return randomResponse;
    }

    if (userName) {
      const randomResponses = [
        `Hey ${userName}! Nice to hear from you. I am Botly by the way`,
        `Wow, I like your name ${userName}! Did your grandmother give it to you?`,
        `It feels nice to know you ${userName}! How are you?`,
        `You have a nice name ${userName}! I wish we could shake hands but sadly, I am yet to have some`,
        `Great knowing you ${userName}! I am Botly by the way.`,
      ];

      const listCount = randomResponses.length;
      const randomItem = Math.floor(Math.random() * listCount);

      return randomResponses[randomItem];
    }

    for (const response of botJsonData) {
      let responseScore = 0;
      let requiredScore = 0;
      const requiredWords = response.required_words;

      if (requiredWords.length > 0) {
        for (const word of splitMessage) {
          if (requiredWords.includes(word)) {
            requiredScore += 1;
          }
        }
      }

      if (requiredScore === requiredWords.length) {
        for (const word of splitMessage) {
          if (response.user_input.includes(word)) {
            responseScore += 1;
          }
        }
      }

      scoreList.push(responseScore);
    }

    const bestResponse = Math.max(...scoreList, 0);
    if (bestResponse !== 0) {
      const responseIndex = scoreList.indexOf(bestResponse);
      const possibleResponses = botJsonData[responseIndex].bot_response;

      const listCount = possibleResponses.length;
      const randomItem = Math.floor(Math.random() * listCount);
      const selectedResponse = possibleResponses[randomItem];
      return selectedResponse;
    }

    return randomString();
  }

  // const talk = (response, onComplete) => {
  //   // Check for Speech Synthesis support
  //   if ("speechSynthesis" in window) {
  //     // var msg = new SpeechSynthesisUtterance();
  //     msg.text = response;

  //     // Listen for the end event before executing the callback
  //     msg.onend = () => {
  //       if (onComplete && typeof onComplete === "function") {
  //         onComplete();
  //       }
  //     };

  //     speechSynthesis.speak(msg);
  //   } else {
  //     console.error("Speech synthesis not supported in this browser.");
  //   }
  // };

  const getTime = () => {
    const currentTime = new Date();

    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedTime;
  };

  const getDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    return formattedDate;
  };

  const randomStrings = [
    "Okay, let me search it out.",
    "Let me quickly find you internet results",
    "Searching for answers...",
    "Let me find that for you.",
    "On it! Fetching results.",
    "Scouring the web for info.",
    "Hold tight, searching in progress.",
    "Time to seek and find.",
    "Searching the web's archives.",
    "Finding answers, one click at a time.",
  ];

  const resultStrings = [
    "Okay, here we go!",
    "Alright!",
    "Got it!",
    "Perfect!",
    "Great, here's what I found.",
    "Ta-da! Here are the results.",
    "Voila! Information at your fingertips.",
    "Excellent! Check this out.",
    "Awesome! Here's what I discovered.",
    "Fantastic! Take a look at these results.",
  ];

  function getRandomResultString() {
    const randomIndex = Math.floor(Math.random() * resultStrings.length);
    return resultStrings[randomIndex];
  }
  function getRandomString() {
    const randomIndex = Math.floor(Math.random() * randomStrings.length);
    return randomStrings[randomIndex];
  }

  const searchWikiPedia = async (transcript) => {
    try {
      if (transcript) {
        console.log("Transcript:", transcript);
        const searchResponse = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${encodeURIComponent(
            transcript
          )}&origin=*`
        );
        const searchData = await searchResponse.json();

        if (searchResponse.ok && searchData.query.search.length > 0) {
          const mostRelevantTitle = searchData.query.search[0].title;

          const response = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&titles=${encodeURIComponent(
              mostRelevantTitle
            )}&origin=*`
          );

          const data = await response.json();

          if (response.ok) {
            const pages = data.query.pages;

            if (Object.keys(pages).length > 0) {
              const pageId = Object.keys(pages)[0];
              const pageData = pages[pageId];

              if ("missing" in pageData) {
                console.error("No information found for the given title.");
                talk("Sorry, no information found.");
              } else {
                const info = pageData.extract;

                if (info) {
                  const sentences = info.split(/(?<=[.!?])\s+/);

                  // Take the first two sentences
                  const selectedInfo = sentences.slice(0, 2).join(" ");

                  // const selectedString = getRandomString();
                  const selectedString = getRandomString();
                  talk(selectedString);
                  const selectedResultString = getRandomResultString();
                  talk(`${selectedResultString} ${selectedInfo}`);
                } else {
                  console.error("No information found:", data);
                  talk("Sorry, no information found.");
                }
              }
            } else {
              console.error("No information found for the given title.");
              talk("Sorry, no information found.");
            }
          } else {
            console.error("Error fetching data from Wikipedia:", data);
            talk("Error fetching data from Wikipedia.");
          }
        } else {
          console.error(
            "No relevant search results found for the given transcript."
          );
          talk("Sorry, no information found.");
        }
      } else {
        talk("Speech recognition result is empty.");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      talk("An unexpected error occurred. Please try again later.");
    }
  };

  const startListening = () => {
    recognition = new window.webkitSpeechRecognition();
    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = async (event) => {
      const last = event.results.length - 1;

      setTranscript(event.results[last][0].transcript);

      // const response = await fetch("http://127.0.0.1:8000/botly", {
      // const response = await fetch("https://botly-backend.onrender.com/botly", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ text: event.results[last][0].transcript }),
      //   mode: "cors",
      // });
      // const responseData = await response.json(); // Parse the JSON content
      introduceUser(event.results[last][0].transcript);
      if (
        ["play", "song", "sing"].some((keyword) =>
          event.results[last][0].transcript.includes(keyword)
        )
      ) {
        const keyword = ["play", "song", "sing"].find((keyword) =>
          event.results[last][0].transcript.includes(keyword)
        );
        const song = event.results[last][0].transcript
          .replace(keyword, "")
          .trim();
        // Set the videoId for react-youtube player
        talk(
          `Unfortunately, am not yet able to play ${song} for you. Am sorry.`
        );
        return;
      }
      const keywords = [
        "idea",
        "describe",
        "outline",
        "state",
        "distinguish",
        "differentiate",
        "illustrate",
        "assess",
        "classify",
        "synthesize",
        "derive",
        "propose",
        "construct",
        "investigate",
        "validate",
        "synthesize",
        "propose",
        "argue",
        "justify",
        "types of",
        "examples",
        "determine",
        "search",
        "discuss",
        "define",
        "explain",
        "interprete",
        "elaborate",
        "who is",
        "who are",
        "what is",
        "what are",
        "where is",
        "how is",
        "how are",
        "which",
        "why",
        "when",
        "tell me about",
        "details on",
        "overview of",
        "history of",
        "background on",
        "compare",
        "contrast",
        "analyze",
        "evaluate",
        "assess",
        "critique",
        "explore",
        "examine",
        "summarize",
        "demonstrate",
      ];
      const forbiddenWords = [
        "date",
        "fossil",
        "environment",
        "prediction",
        "historical",
        "data",
        "distributed",
        "distribution",
        "energy",
        "stored",
        "storage",
        "renewable",
        "energy",
        "carbon",
        "footprint",
        "today",
        "name",
        "you",
        "me",
        "my",
        "sister",
        "kennedy",
        "muhumuza",
        "emmanuella",
        "kopio",
        "timothy",
        "how are you",
        "vanessa",
        "vanesa",
        "noble",
        "kisembo",
        "santrina",
        "satrina",
        "latrina",
        "mummy",
        "daddy",
        "bed",
        "triza",
        "theresa",
        "brother",
        "kabamba",
        "natonda",
        "namitala",
        "teresa",
        "tereza",
        "kopio",
        "gift",
        "emmanuella",
        "kaducu",
        "lagen",
        "nasiima",
        "komugisa",
        "precious",
        "ninsiima",
        "timothy",
      ];

      if (
        keywords.some((keyword) =>
          event.results[last][0].transcript.toLowerCase().includes(keyword)
        ) &&
        !forbiddenWords.some((forbiddenWord) =>
          event.results[last][0].transcript
            .toLowerCase()
            .includes(forbiddenWord)
        )
      ) {
        // const transcript = event.results[last][0].transcript.trim();
        const transcript = event.results[last][0].transcript;

        if (transcript) {
          searchWikiPedia(transcript);
        }
        return;
      }

      if (
        ["time", "how are you by the sun"].some((keyword) =>
          event.results[last][0].transcript.includes(keyword)
        )
      ) {
        const time = getTime();
        talk(`Current time is ${time}.`);
        return;
      }
      if (
        ["news", "latest", "whats new", "headlines"].some((keyword) =>
          event.results[last][0].transcript.includes(keyword)
        )
      ) {
        // const news = getNews();

        talk(
          "Sorry dear, am not yet able to tell you any news updates for now. But soon I shall be able to."
        );
        // const dbMessages = {
        //   id: uuidv4(),
        //   user: event.results[last][0].transcript,
        //   bot: news,
        //   createdAt: new Date().getTime(),
        // };
        // const messageDataRef = doc(colletionRef, dbMessages.id);
        // await setDoc(messageDataRef, dbMessages);
        // const updatedMessages = [
        //   ...messages,
        //   {
        //     id: uuidv4(),
        //     bot: news,
        //     user: event.results[last][0].transcript,
        //   },
        // ];

        // setMessages(updatedMessages);
        return;
      }

      if (
        ["date"].some((keyword) =>
          event.results[last][0].transcript.includes(keyword)
        )
      ) {
        const date = getDate();
        talk(`The date today is ${date}.`);
        return;
      }

      if (
        ["weather", "forecast"].some((keyword) =>
          event.results[last][0].transcript.includes(keyword)
        )
      ) {
        // Extract the city from the command
        const city = extractCity(event.results[last][0].transcript);

        // Get weather information
        const weatherData = await getWeather(city);

        if (weatherData) {
          // Extract relevant weather information
          const temperature = weatherData.main.temp;
          const description = weatherData.weather[0].description;

          // Update state with weather information
          talk(
            `The current temperature in ${city} is ${temperature} degrees Celsius. ${description}.`
          );
          // const dbMessages = {
          //   id: uuidv4(),
          //   user: event.results[last][0].transcript,
          //   bot: `The current temperature in ${city} is ${temperature} degrees Celsius. ${description}.`,
          //   createdAt: new Date().getTime(),
          // };
          // const messageDataRef = doc(colletionRef, dbMessages.id);
          // await setDoc(messageDataRef, dbMessages);
          const updatedMessages = [
            ...messages,
            {
              id: uuidv4(),
              bot: `The current temperature in ${city} is ${temperature} degrees Celsius. ${description}.`,
              user: event.results[last][0].transcript,
            },
          ];

          setMessages(updatedMessages);
          return;
        } else {
          talk(
            "Sorry, I couldn't retrieve the weather information at the moment."
          );
          // const dbMessages = {
          //   id: uuidv4(),
          //   user: event.results[last][0].transcript,
          //   bot: "Sorry, I couldn't retrieve the weather information at the moment.",
          //   createdAt: new Date().getTime(),
          // };
          // const messageDataRef = doc(colletionRef, dbMessages.id);
          // await setDoc(messageDataRef, dbMessages);
          const updatedMessages = [
            ...messages,
            {
              id: uuidv4(),
              bot: "Sorry, I couldn't retrieve the weather information at the moment.",
              user: event.results[last][0].transcript,
            },
          ];

          setMessages(updatedMessages);
          return;
        }
      }
      const response = calculateResponse(event.results[last][0].transcript);

      console.log("pass 1: after response");

      console.log("done");
      // if (response.status !== 200) {
      //   throw new Error(`Error: ${response.statusText}`);
      // }
      console.log("resonse:", response);
      // const botResponse = responseData.bot;
      talk(response);

      // const dbMessages = {
      //   id: uuidv4(),
      //   user: event.results[last][0].transcript,
      //   bot: response,
      //   createdAt: new Date().getTime(),
      // };
      setTranscript(event.results[last][0].transcript);
      // const messageDataRef = doc(colletionRef, dbMessages.id);
      // await setDoc(messageDataRef, dbMessages);
      const updatedMessages = [
        ...messages,
        {
          id: uuidv4(),
          bot: response,
          user: event.results[last][0].transcript,
        },
      ];

      setMessages(updatedMessages);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    // recognition.stop();
    setListening(false);
  };

  useEffect(() => {
    startListening();

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);
  // useEffect(() => {
  //   const getTestData = async () => {
  //     try {
  //       const docSnap = await getDocs(colletionRef);

  //       if (!docSnap.empty) {
  //         const data = await docSnap.docs.map((doc) => doc.data());
  //         data.unshift(initialMessage);
  //         // message.unshift(data);
  //         setMessages(() => data);
  //         // setMessages([
  //         //   ...messages,
  //         //   { id: item.id, user: item.user, bot: item.bot },
  //         // ]);

  //         console.log("Document data:", data);
  //       } else {
  //         console.log("No such document!");
  //       }
  //     } catch (e) {
  //       console.log("Error getting cached document:", e);
  //     }
  //   };
  //   getTestData();
  //   // console.log(tests);
  // }, []);

  useEffect(() => {
    // Set initial messages
    setMessages(messages);

    // Scroll to the bottom of the messages when new messages are added
    scrollToBottom();
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the messages whenever new messages are added
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage) return;

    try {
      // const response = await fetch("http://127.0.0.1:8000/botly", {
      // const response = await fetch("https://botly-backend.onrender.com/botly", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ text: newMessage }),
      //   mode: "cors",
      // });

      // const responseData = await response.json(); // Parse the JSON content

      if (
        ["time", "how are you by the sun"].some((keyword) =>
          newMessage.includes(keyword)
        )
      ) {
        const time = getTime();
        // const dbMessages = {
        //   id: uuidv4(),
        //   user: newMessage,
        //   bot: `Current time is ${time}.`,
        //   createdAt: new Date().getTime(),
        // };
        const botReply = `Current time is ${time}.`;
        const updatedMessages = [
          ...messages,
          { id: uuidv4(), bot: botReply, user: newMessage },
        ];
        // const messageDataRef = doc(colletionRef, dbMessages.id);
        // await setDoc(messageDataRef, dbMessages);
        setMessages(updatedMessages);
        setNewMessage("");

        return;
      }

      if (newMessage.includes("calculate") || newMessage.includes("solve")) {
        const expression = newMessage.replace(/(calculate|solve)\s+/i, "");
        try {
          const result = eval(expression);

          const botResponse = `The result of the calculation is ${result}`;
          // const dbMessages = {
          //   id: uuidv4(),
          //   user: newMessage,
          //   bot: botResponse,
          //   createdAt: new Date().getTime(),
          // };
          const updatedMessages = [
            ...messages,
            { id: uuidv4(), bot: botResponse, user: newMessage },
          ];
          // const messageDataRef = doc(colletionRef, dbMessages.id);
          // await setDoc(messageDataRef, dbMessages);
          setMessages(updatedMessages);
          setNewMessage("");

          return;
        } catch (error) {
          console.log(
            "Sorry, I couldn't perform the calculation. Please check your expression."
          );

          const botReply =
            "Sorry, I couldn't perform the calculation. Please check your expression.";
          // const dbMessages = {
          //   id: uuidv4(),
          //   user: newMessage,
          //   bot: botResponse,
          //   createdAt: new Date().getTime(),
          // };
          const updatedMessages = [
            ...messages,
            { id: uuidv4(), bot: botReply, user: newMessage },
          ];
          // const messageDataRef = doc(colletionRef, dbMessages.id);
          // await setDoc(messageDataRef, dbMessages);
          setMessages(updatedMessages);
          setNewMessage("");
          return;
        }
      }
      const response = calculateResponse(newMessage);

      console.log("done");
      // if (response.status !== 200) {
      //   throw new Error(`Error: ${response.statusText}`);
      // }
      console.log("resonse:", response);
      // const botResponse = responseData.bot;

      // const dbMessages = {
      //   id: uuidv4(),
      //   user: newMessage,
      //   bot: response,
      //   createdAt: new Date().getTime(),
      // };

      // const unsubscribe = await onSnapshot(
      //   doc(firestore, "seg_bot", dbMessages.id),
      //   (snapshot) => {
      //     console.log("snapshot:", snapshot.data());
      //   }
      // );
      console.log("before snapshot execution");
      // unsubscribe();
      console.log("after snapshot execution");

      const updatedMessages = [
        ...messages,
        { id: uuidv4(), bot: response, user: newMessage },
      ];

      // const messageDataRef = doc(colletionRef, dbMessages.id);
      // await setDoc(messageDataRef, dbMessages);

      console.log("before snapshot execution");
      // unsubscribe();
      console.log("after snapshot execution");
      setMessages(updatedMessages);
      setNewMessage("");
    } catch (error) {
      console.error("Error submitting user input:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  const handleActiveTabChange = (tab) => {
    setActive(tab);
    scrollToBottom();
  };

  function convertIsoStringToCustomFormat(isoString) {
    const inputDate = new Date(isoString);

    if (isNaN(inputDate)) {
      return;
    }

    let hours = inputDate.getHours();
    let minutes = inputDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedTime = `${hours}:${minutes} ${ampm}`;
    // console.log("chat foprmatted time", formattedTime);
    return formattedTime;
  }

  return (
    <div className={styles["chat-container"]}>
      <div className={styles["tab"]}>
        <span
          // className={`${styles["tab_option"]}
          // }`}
          onClick={() => handleActiveTabChange("voice")}
        >
          {/* <MdRecordVoiceOver /> */}
          <span
            className={styles["bot-svg-container"]}
            onClick={handleBotState}
          >
            {botState === "voiced" && (
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
                className={styles["bot-svg"]}
                // onClick={handleBotClick}
              >
                <path d="M6 12.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 004.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 01-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 013 9.219V8.062zm4.542-.827a.25.25 0 00-.217.068l-.92.9a24.767 24.767 0 01-1.871-.183.25.25 0 00-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 00.189-.071l.754-.736.847 1.71a.25.25 0 00.404.062l.932-.97a25.286 25.286 0 001.922-.188.25.25 0 00-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 00-.166.076l-.754.785-.842-1.7a.25.25 0 00-.182-.135z" />
                <path d="M8.5 1.866a1 1 0 10-1 0V3h-2A4.5 4.5 0 001 7.5V8a1 1 0 00-1 1v2a1 1 0 001 1v1a2 2 0 002 2h10a2 2 0 002-2v-1a1 1 0 001-1V9a1 1 0 00-1-1v-.5A4.5 4.5 0 0010.5 3h-2V1.866zM14 7.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5A3.5 3.5 0 015.5 4h5A3.5 3.5 0 0114 7.5z" />
              </svg>
            )}
            {botState === "text" && (
              <FaMicrophoneLines className={styles["bot-svg"]} />
            )}
            <span className={styles["active-indicator"]}></span>
          </span>
          {/* <span> Voiced </span> */}
        </span>
        {/* <span
          className={`${styles["tab_option"]} 
          }`}
          onClick={() => handleActiveTabChange("voice")}
        > */}
        <span className={styles["tab_option"]}>
          <span
            className={`${styles["assistant_option"]} 
            }`}
          >
            EcoGrid Assistant
          </span>
          <span className={styles["online_option"]}>Online</span>
        </span>
        <span className={styles["close-icon"]}>
          <svg
            onClick={() => setBotActive(false)}
            fill="none"
            viewBox="0 0 24 24"
            height="1.2em"
            width="1.2em"
            // className={styles["close-icon"]}
          >
            <path
              fill="currentColor"
              d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
            />
          </svg>
        </span>
        {/* <PiTextOutdentBold /> */}
        {/* </span> */}
      </div>
      {active === "text" ||
        (active === "voice" && (
          <>
            <div className={styles["chat-messages"]} ref={messagesRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  ref={messagesRef}
                  className={`${styles["message"]} ${
                    styles[`${message?.user}`]
                  }`}
                >
                  {message?.user && (
                    <div className={styles["user-icon"]}>
                      {/* <span>👤</span>  */}
                      <span className={styles["user"]}>{message?.user}</span>
                      <span className={styles["time-user"]}>
                        {convertIsoStringToCustomFormat(message?.createdAt)}
                      </span>
                    </div>
                  )}
                  {message?.bot && (
                    <>
                      <div className={styles["bot-container"]}>
                        <span className={styles["bot-image"]}>
                          <img
                            src={ai}
                            alt="ai_image"
                            className={styles["bot-image"]}
                          />
                        </span>
                        {/* <span className={styles["bot-image"]}>🤖</span> */}
                        {/* <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          className={styles["bot-svg"]}
                          // onClick={handleBotClick}
                        >
                          <path d="M6 12.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 004.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 01-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 013 9.219V8.062zm4.542-.827a.25.25 0 00-.217.068l-.92.9a24.767 24.767 0 01-1.871-.183.25.25 0 00-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 00.189-.071l.754-.736.847 1.71a.25.25 0 00.404.062l.932-.97a25.286 25.286 0 001.922-.188.25.25 0 00-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 00-.166.076l-.754.785-.842-1.7a.25.25 0 00-.182-.135z" />
                          <path d="M8.5 1.866a1 1 0 10-1 0V3h-2A4.5 4.5 0 001 7.5V8a1 1 0 00-1 1v2a1 1 0 001 1v1a2 2 0 002 2h10a2 2 0 002-2v-1a1 1 0 001-1V9a1 1 0 00-1-1v-.5A4.5 4.5 0 0010.5 3h-2V1.866zM14 7.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5A3.5 3.5 0 015.5 4h5A3.5 3.5 0 0114 7.5z" />
                        </svg> */}
                        <div className={styles["bot-icon"]}>
                          <span className={`${styles["bot-msg"]}`}>
                            {message?.bot}
                          </span>
                          <span className={styles["time"]}>
                            {convertIsoStringToCustomFormat(message?.createdAt)}
                          </span>
                          {/* <span>{botResponse}</span> */}
                        </div>
                      </div>
                    </>
                  )}

                  {/* <div className="message-text">{message.text}</div> */}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <>
              {botState === "voiced" && (
                <div className={styles["voice_container"]}>
                  <button
                    onClick={listening ? stopListening : startListening}
                    className={styles["listen_btn"]}
                  >
                    <span>
                      {listening ? (
                        <FaMicrophoneLines className={styles["voice-icon"]} />
                      ) : (
                        <FaMicrophoneLinesSlash
                          className={styles["voice-icon"]}
                        />
                      )}
                    </span>
                    {/* <span>
                      {listening ? "Stop Listening" : "Start Listening"}
                    </span> */}
                  </button>
                  <p>
                    <b></b> {transcript}
                  </p>
                </div>
              )}
              {botState === "text" && (
                <form className={styles["chat-input"]} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={handleInputChange}
                    className={styles["input_field"]}
                  />
                  <button type="submit" className={styles["send-icon"]}>
                    <IoMdSend />
                  </button>
                </form>
              )}
            </>
          </>
        ))}
    </div>
  );
};

export default Chat;
