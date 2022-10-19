import React from "react";

const AuthenticatedUser = () => {
  return (
    <div className="flex justify-between border-b p-3 h-16">
      <button>
        <img
          className="w-10 h-10 rounded-full"
          src="https://pps.whatsapp.net/v/t61.24694-24/213817366_245568303686213_5824475856398309203_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ4Vi9v7Tznpa3WZmStV1R3Ske5qzqSnvucgK2_hSOmsw&oe=635DCB2C"
          alt=""
        />
      </button>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AuthenticatedUser;
