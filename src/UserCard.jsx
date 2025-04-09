import React from "react";
import visa from "./assets/visa.png";
import rupay from "./assets/rupay.png";
import mastercard from "./assets/mastercard.png";

const UserCard = ({ user, logo }) => {
  const getLogo = () => {
    switch (logo) {
      case "visa":
        return visa;
      case "mastercard":
        return mastercard;
      case "rupay":
        return rupay;
      default:
        return null;
    }
  };
  return (
    <article className="usercard flex flex-col md:flex-row justify-center items-start gap-8 p-6 bg-white rounded-2xl shadow-lg w-fit mx-auto mt-10 border border-gray-200">
      <pre className="textarea text-left space-y-2 text-gray-800">
        <p>
          <span className="font-semibold text-red-800">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold text-red-800">Address:</span>{" "}
          {user.address}
        </p>
        <p>
          <span className="font-semibold text-red-800">Card Number:</span>{" "}
          {user.card_number}
        </p>
        <p>
          <span className="font-semibold text-red-800">CVV:</span> {user.cvv}
        </p>
        <p>
          <span className="font-semibold text-red-800">Expiry Date:</span>{" "}
          {user.expiry_date}
        </p>
        <p>
          <span className="font-semibold text-red-800">Email:</span>{" "}
          {user.email}
        </p>
      </pre>

      <div className="logo w-[60px] h-[40px]">
        {getLogo() && (
          <img
            src={getLogo()}
            alt={logo}
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </article>
  );
};

export default UserCard;
