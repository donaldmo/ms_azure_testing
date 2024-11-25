// Import the main function from the main.js file
const { main } = require('./azure-openai');

// Call the main function
main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
