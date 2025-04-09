import React from "react";
import indianpost from "./assets/indianpost.svg";
import LetterGlitch from "./LetterGlitch";
import UserCard from "./UserCard";
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://indian-post-backend.vercel.app/userDetails"
      );
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const detectCardType = (number) => {
    const clean = number.replace(/\s+/g, "");

    if (/^4[0-9]{6,}$/.test(clean)) return "visa";
    if (
      /^(5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,})$/.test(
        clean
      )
    )
      return "mastercard";
    if (/^6(?!011)(?:0[0-9]{14}|52[12][0-9]{12})$/.test(clean)) return "rupay";

    return "";
  };

  return (
    <>
      <section
        className="main w-full px-[10%] flex gap-6 flex-col justify-start py-[2%] items-center"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            position: "fixed", // <- fix the background instead of absolute
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        >
          <LetterGlitch
            glitchColors={["#ba0303", "#540303", "#ff0000"]}
            glitchSpeed={200}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        <img
          src={indianpost}
          alt=""
          className="logo w-[20%] bg-white p-4 rounded-[12px]"
        />
        <div className="textarea bg-[#00000080]  w-fit flex flex-col justify-center items-center p-6 rounded-[12px]">
          <h1 className="text-white text-[72px] font-bold">
            <span className="text-red-800 text-stroke-white">Indian Post</span>{" "}
            ₹21 Scam
          </h1>
          <p className="description text-white text-[24px]">
            Your Credit/Debit Card details are Stolen!
          </p>
        </div>
        <section className="w-full grid grid-cols-2 gap-2 items-center">
          {userData &&
            userData.map((user, index) => (
              <UserCard
                key={index}
                user={user}
                logo={detectCardType(user.card_number)}
              />
            ))}
        </section>
      </section>
    </>
  );
}

export default App;
