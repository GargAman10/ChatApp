To set up a Node.js server, begin by initializing your project with npm init -y. 
Next, install the necessary packages by running npm install express axios cors followed by 
npm install --save-dev nodemon. 
Then, modify the package.json file by adding a script to the "scripts" section for using nodemon to automatically restart the server: "start": "nodemon index.js". 
Create a .gitignore file to exclude the node_modules directory by running echo node_modules/ > .gitignore. After that, create the main server file with touch index.js and add your server code to this file. Finally, start your server by executing npm run start.