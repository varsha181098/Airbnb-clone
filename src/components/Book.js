import './Book.css'
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
    appId: "1:700827261542:web:37b9f0c39c69542ae26ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const Book = () => {
    let Hotels = [
        {
            name: " Name -  Hotel 1",
            price: "100",
            image: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },

        {
            name: " Name -  Hotel 2",
            price: "200",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Name -  Hotel 3",
            price: "300",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Name -  Hotel 4",
            price: "400",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Name -  Hotel 5",
            price: "100",
            image: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },

        {
            name: "Name -  Hotel 6",
            price: "200",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ]
    // console.log(Hotels[0].price);
    const bookHotel1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[0].image;
        nameTarget.innerHTML = Hotels[0].name;
        priceTarget.innerHTML = '$' + Hotels[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[0].image,
            HotelName: Hotels[0].name,
            HotelPrice: '$' + Hotels[0].price,
            });
        }

    }
    const bookHotel2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[1].image;
        nameTarget.innerHTML = Hotels[1].name;
        priceTarget.innerHTML = '$' + Hotels[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[1].image,
            HotelName: Hotels[1].name,
            HotelPrice: '$' + Hotels[1].price,
            });
        }
    }
    const bookHotel3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[2].image;
        nameTarget.innerHTML = Hotels[2].name;
        priceTarget.innerHTML = '$' + Hotels[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[2].image,
            HotelName: Hotels[2].name,
            HotelPrice: '$' + Hotels[2].price,
            });
        }
    }
    const bookHotel4 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[3].image;
        nameTarget.innerHTML = Hotels[3].name;
        priceTarget.innerHTML = '$' + Hotels[3].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[3].image,
            HotelName: Hotels[3].name,
            HotelPrice: '$' + Hotels[3].price,
            });
        }
    }
    const bookHotel5 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[4].image;
        nameTarget.innerHTML = Hotels[4].name;
        priceTarget.innerHTML = '$' + Hotels[4].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[4].image,
            HotelName: Hotels[4].name,
            HotelPrice: '$' + Hotels[4].price,
            });
        }
    }
    const bookHotel6 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[5].image;
        nameTarget.innerHTML = Hotels[5].name;
        priceTarget.innerHTML = '$' + Hotels[5].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[5].image,
            HotelName: Hotels[5].name,
            HotelPrice: '$' + Hotels[5].price,
            });
        }
    }
    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been booked");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        <div className="box">
            <div className="content">
                <div className="text"><h1>Available Hotels</h1></div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="data:image/png;base64,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" id='targetImage' alt="" />
                         <div className="hotel_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookHotel1}>
                            <img src={Hotels[0].image} alt="hotel1" />
                            <div className="hotel_name">{Hotels[0].name}</div>
                            <div className="price">{'$' + Hotels[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel2}>
                            <img src={Hotels[1].image} alt="hotel2" />
                            <div className="hotel_name">{Hotels[1].name}</div>
                            <div className="price">{'$' + Hotels[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel3}>
                            <img src={Hotels[2].image} alt="hotel3" />
                            <div className="hotel_name">{Hotels[2].name}</div>
                            <div className="price">{'$' + Hotels[2].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel4}>
                            <img src={Hotels[3].image} alt="hotel4" />
                            <div className="hotel_name">{Hotels[3].name}</div>
                            <div className="price">{'$' + Hotels[3].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel5}>
                            <img src={Hotels[4].image} alt="hotel4" />
                            <div className="hotel_name">{Hotels[4].name}</div>
                            <div className="price">{'$' + Hotels[4].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel6}>
                            <img src={Hotels[5].image} alt="hotel4" />
                            <div className="hotel_name">{Hotels[5].name}</div>
                            <div className="price">{'$' + Hotels[5].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;