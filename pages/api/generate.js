import { Configuration, OpenAIApi } from "openai";
require('dotenv').config()
import client from "twilio";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const twilioClient = client(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

function generatePrompt(name, phoneNumber, make, model, year, vin, problemDescription) {
  return ` 
    Act as the boss and instruct Andrew to follow up with the customer ${name} at ${phoneNumber}, 
    the vehicle is a ${year} ${make} ${model} with a vin number of ${vin}.
    the customer said ${problemDescription}
    give them a call.
    Thank you,
    The Boss.
  `;
}

export default async function (req, res) {
  console.log('Request received: ', req.body); // Add a console.log statement to show the request body
  if (!configuration.apiKey) {
    console.log('OpenAI API key not configured'); // Add a console.log statement to show that the API key is not configured
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const { name, make, phoneNumber, model, year, vin, problemDescription } = req.body;
  if (!make || !model || !year || !vin || !problemDescription) {
    console.log('Missing required parameters'); // Add a console.log statement to show that required parameters are missing
    res.status(400).json({
      error: {
        message: "Please provide make, model, year, VIN, and problem description for the vehicle",
      },
    });
    return;
  }

  try {
    const prompt = generatePrompt(name, phoneNumber, make, model, year, vin, problemDescription);
    console.log('Generated prompt: ', prompt); // Add a console.log statement to show the generated prompt
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.6,
      max_tokens: 1000,
    });
    const message = completion.data.choices[0].text;
    console.log('Generated message: ', message); // Add a console.log statement to show the generated message
    const messageBody = `A Form Was Submitted\n\n${message}`;
    // Send the message using Twilio
    const twilioResponse = await twilioClient.messages.create({
      body: messageBody,
      from: '+18447730571',
      to: '+18052687687' // Replace with the customer's phone number
    });
    console.log('Twilio response: ', twilioResponse); // Add a console.log statement to show the Twilio response
    res.status(200).json({ result: "Thank you for submitting the form! You will be hearing from us shortly!" });
  } catch (error) {
    console.log('Error occurred: ', error); // Add a console.log statement to show the error
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
}
