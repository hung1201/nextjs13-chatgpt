import queryApi from "@/utils/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { inputValue, chatId, model, session } = req.body;

  if (!inputValue || !chatId) {
    res.status(400).json({ message: "Please provide question or valid id" });
    return;
  }

  // ChatGPT query
  const response = await queryApi(inputValue, model);
  const message: Message = {
    text: response || "Chat GPT can't answer",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email!)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({
    answer: message.text,
  });
}
