// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openAi from "@/utils/chatGPT";
import type { NextApiRequest, NextApiResponse } from "next";

type Opt = {
  value: string;
  label: string;
};

type Data = {
  modelOpt: Opt[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models = await openAi.listModels().then((res) => res.data.data);
  const modelOpt = models.map((item) => ({
    value: item.id,
    label: item.id,
  }));
  res.status(200).json({ modelOpt });
}
