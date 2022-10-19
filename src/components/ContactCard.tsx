import React from "react";

const ContactCard = () => {
  return (
    <div className="flex p-3 gap-2">
      <div>
        <img
          className=" w-12 h-12 rounded-full"
          src="https://pps.whatsapp.net/v/t61.24694-24/200301938_505519510885427_5383825801587828370_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSvWJpAwvhxVlZvLEt1jYsiGJVaYaWcD2ezCkXeRE1UlQ&oe=635E44AE"
          alt=""
        />
      </div>
      <div>
        <p>Anwarul Islam</p>
        <p className=" text-zinc-500 text-sm">Vai kemon achen???</p>
      </div>
    </div>
  );
};

export default ContactCard;
