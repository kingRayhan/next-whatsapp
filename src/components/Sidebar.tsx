import React from "react";
import AuthenticatedUser from "./AuthenticatedUser";
import ContactCard from "./ContactCard";
import Search from "./Search";

const Sidebar = () => {
  return (
    <>
      <AuthenticatedUser />
      <Search />
      <div className="chat-app__contacts">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </>
  );
};

export default Sidebar;
