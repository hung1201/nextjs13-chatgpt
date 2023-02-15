import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const NewChat = (props: Props) => {
  return (
    <div className="flex border border-gray-700 items-center justify-center rounded-lg px-5 py-3 text-sm space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all ease-out duration-300">
      <PlusIcon className="h-4 w-4" />
      <p>New chat</p>
    </div>
  );
};

export default NewChat;
