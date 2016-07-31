# VOD


## Installation

1. Clone this [repository](https://github.com/nadeeth/vod.git) or download the [latest build](https://github.com/nadeeth/vod/archive/master.zip).
2. Update API base url in "services/api.js" (Ex. var api_url = "http://localhost:3000";).
3. Open the App through a web server (Ex. http://localhost/vod/ ).


## API - Installation

1. Install the latest versions of NodeJs and MongoDB. 
2. Clone this [repository](https://github.com/nadeeth/vod-api.git) or download the [latest build](https://github.com/nadeeth/vod-api/archive/master.zip).
3. Run the command "npm install" to install all the dependencies.
4. Edit "config.js" and set MongoDB connection string.
5. Run the command "npm start" to start server.

To run the server in development mode "DEBUG=weasel:* npm run-script devstart" or in Windows "set DEBUG=weasel:* & npm run-script devstart". Development mode uses Nodemon to run the server (Nodemon restarts the server when you edit and save files).

## Demo

[http://45.55.142.229/vod/](http://45.55.142.229/vod/)
