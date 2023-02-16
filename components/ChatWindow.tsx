"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import Message from "./Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  chatId: string;
};

const ChatWindow = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">Start conversation</p>
          <ArrowDownCircleIcon className="w-10 h-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}
      {messages?.docs.map((msg) => (
        <Message key={msg.id} message={msg.data()} />
      ))}
    </div>
  );
};

export default ChatWindow;
