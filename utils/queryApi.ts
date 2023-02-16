import openAi from "./chatGPT";

const queryApi = async (prompt: string, model: string) => {
  const res = await openAi
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => `Chat GPT can't find answer: ${err}`);
  return res;
};
export default queryApi;
