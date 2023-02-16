import ChatInput from "@/components/ChatInput";
import ChatWindow from "@/components/ChatWindow";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <ChatWindow chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default ChatPage;
