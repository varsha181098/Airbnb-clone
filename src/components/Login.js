import "./Login.css";
import BookPage from "./Book";
import { useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEslHLq8oHYoyyfQoqD0r9HCH-jZd-NBY",
  authDomain: "linkedin-project-3bc20.firebaseapp.com",
  projectId: "linkedin-project-3bc20",
  storageBucket: "linkedin-project-3bc20.appspot.com",
  messagingSenderId: "700827261542",
  appId: "1:700827261542:web:37b9f0c39c69542ae26ba7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Home = () => {
  const [valid, setvalid] = useState(true);
  const [hide, sethide] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book_date = document.getElementById("book-date");
    const book_time = document.getElementById("book-time");

    const leave_date = document.getElementById("leave-date");
    const leave_time = document.getElementById("leave-time");

    if (
      !book_date.value ||
      !book_time.value ||
      !leave_date.value ||
      !leave_time.value
    ) {
      alert("Please fill all the fields");
    } else {
      writeUserData();
      function writeUserData() {
        const db = getDatabase();
        set(ref(db, "data/"), {
          bookingdate: book_date.value,
          bookingtime: book_time.value,
          leave_date: leave_date.value,
          leave_time: leave_time.value,
        });
      }
      alert("Your booking has been made");
      const BookPageDiv = document.querySelector(".box");
      const container = document.querySelector(".container");
      setvalid(!valid + BookPageDiv.classList.add("show"));
      sethide(!hide + container.classList.add("hide"));
    }
  };
  return (
    <>
      <BookPage />
      <div className="container">
        <div className="content">
          <div className="text">Book Now</div>

          <div className="form2">
            <form
              className="first-form-option"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="first-form">
                <div className="txt">Date & Time you would like to Stay</div>
                <div className="first-form1">
                  <div className="inputData">
                    <input type="date" name="" id="book-date" />
                  </div>
                  <div className="inputData">
                    <input type="time" name="" id="book-time" />
                  </div>
                </div>
              </div>
              <div className="second-form">
                <div className="txt">Date & Time you would like to leave</div>
                <div className="first-form1">
                  <div className="inputData">
                    <input type="date" name="" id="leave-date" />
                  </div>
                  <div className="inputData">
                    <input type="time" name="" id="leave-time" />
                  </div>
                </div>
              </div>
              <div className="book">
                <button type="submit">Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
