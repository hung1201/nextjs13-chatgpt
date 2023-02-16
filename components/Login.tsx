"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <div className="w-[300px] h-[300px] overflow-hidden rounded-[100px]">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
          }
          alt="GPT_LOGO"
          width={300}
          height={300}
        />
      </div>
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse mt-5"
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
