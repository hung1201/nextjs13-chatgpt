import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.GPT_KEY,
});

const openAi = new OpenAIApi(config);

export default openAi;
