To integrate React with Chat Engine, this repository demonstrates how to easily add chat functionality into a React application using Chat Engine. For a better understanding of the code, be sure to check out this video!

To set up your chat client, follow these three simple steps. These steps assume you have already configured one of the server projects in the ../server-* directory (for example, server-express).

First, create a Chat Engine server by visiting Chat Engine and clicking on "New Project." Follow the prompts to set it up. You will need your Project ID and Private Key for the next step.

Next, link your .env file to Chat Engine using environment variables. This setup allows you to connect to different chat servers in local, staging, and production environments. Replace the UUID below with your own and add the following line to your .env file: REACT_APP_CHAT_ENGINE_PROJECT_ID=5d498a31-cd23-42b7-b367-4fcc9463bd2f.

Finally, navigate to the client-react/ directory and run the following commands: npm install followed by npm run start. Your Express server will be running on localhost:3000 and connected to Chat Engine. All new "Sign Up" users are registered on Chat Engine, and their credentials can be accessed upon "Login."