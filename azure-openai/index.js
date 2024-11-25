require('dotenv').config(); // Load environment variables from .env

const { AzureOpenAI } = require("openai");

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = process.env.AZURE_OPENAI_API_VERSION;
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;

async function main() {
  console.log("== Get chat completions Sample ==");

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  // Constructing the chat messages for the completion request
  const result = await client.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Does Azure OpenAI support customer managed keys?" },
      { role: "assistant", content: "Yes, customer managed keys are supported by Azure OpenAI." },
      { role: "user", content: "Do other Azure AI services support this too?" },
    ],
    model: deployment, // Ensure the correct model is specified here
  });

  for (const choice of result.choices) {
    console.log(choice.message.content); // Log the content of the assistant's response
  }
}

// Export the main function
module.exports = { main };
