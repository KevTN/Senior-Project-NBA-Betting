#!/bin/bash

# Open terminal and run Node APIOdds.js (port 3001)
gnome-terminal --tab -- bash -c "node src/APIOdds.js"

# Wait for a few seconds to allow the first server to start
sleep 5

# Open another terminal and run Node APIGames.js (port 3002)
gnome-terminal --tab -- bash -c "node src/APIGames.js"

# Wait for a few seconds to allow the second server to start
sleep 5

# Open a third terminal and run npm start
gnome-terminal --tab -- bash -c "npm start"

