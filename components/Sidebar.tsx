"use client";
import { db } from "@/firebase";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

type Props = {};

const Sidebar = (props: Props) => {
  const { data: session } = useSession();
  const [value] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div className="space-y-2">
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>
          {value?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={() => signOut()}
          src={session?.user?.image!}
          alt="user image"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default Sidebar;
