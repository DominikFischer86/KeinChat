# KeinChat chat app
 Chat App with Typescript React using Vite and Socket.io
 
 ## Install
 
1. clone repo
2. Start client server:
 from root `cd .\client\`
 `npm i`
 `npm run dev`
3. Start Node server:
 from root `cd .\server\`
 `npm i`
 `npm run devStart`
 
 ## Basic use
 1. Start client and node server and open browser with the provided client server URL (usually `http://127.0.0.1:5173/`)
 2. Use same URL and open another window in incognito mode
 3. Login with a new Id, which will be generated automatically or enter an Id of your choice.
 4. Create a new contact, using the Id of the other browser tab. You can also do it vice versa, but it's not required. It just replaces the Id with the respective name in chats.
 5. Create a new conversation and choose the newly added contact (or more if you created several) to start a chat
 6. Start typing and after submitting the messages will show up in each browser tab respectively, either as sender or as receiver.

 ## Motivation

This is a small project build after this WebDevSimplified Video: https://youtu.be/tBr-PybP_9c

I was curious about socket.io for its use in chat applications, which might be useful in another project I'm working on.
But I also didn't want to just blindly follow the steps in the video, so I decided to use typescript instead of javascript in order to engage more with the code and pay more attention to types.

## Tech

Another deviation from the video is that I didn't use CRA and opted for Vite instead, since I grew fond of it the last couple weeks.

I managed to make the app work, despite not everything working out just as it did in the video (which is two years old already, so go figure)

## Going forward

This can be extended from here, like adding timestamps, using a db rather than localstorage, adding image transfers, emojis etc.

What I will be focusing on for the time being is getting all the types right. I'm fine using basic types but still struggle with more complex types, type extensions and so on. 
