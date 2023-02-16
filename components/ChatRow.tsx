import { db } from "@/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc } from "@firebase/firestore";
type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();

  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  const removeChatRow = async () => {
    console.log("id: ", id);
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <Link
      className={`flex items-center rounded-lg px-5 py-3 text-sm space-x-2 justify-center hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all ease-out duration-300 ${
        pathname?.includes(id) && `bg-gray-700/70`
      }`}
      href={`/chat/${id}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5 text-white" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New chat"}
      </p>
      <TrashIcon
        onClick={removeChatRow}
        className="h-5 w-5 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
};

export default ChatRow;
