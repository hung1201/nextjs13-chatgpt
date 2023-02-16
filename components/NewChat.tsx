import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const NewChat = (props: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div
      onClick={createNewChat}
      className="flex border border-gray-700 items-center justify-center rounded-lg px-5 py-3 text-sm space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all ease-out duration-300"
    >
      <PlusIcon className="h-4 w-4" />
      <p>New chat</p>
    </div>
  );
};

export default NewChat;
