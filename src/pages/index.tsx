import AuthenticatedUser from "@/components/AuthenticatedUser";
import ContactCard from "@/components/ContactCard";
import NoRoomScreen from "@/components/NoRoomScreen";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="chat-app">
      <div className="chat-app__sidebar">
        <Sidebar />
      </div>
      <div className="chat-app__main">
        <NoRoomScreen />
      </div>
    </div>
  );
};

export default Home;
