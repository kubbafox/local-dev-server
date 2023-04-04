# local-dev-server
local-dev-server to support debugging

1. make sure you have install node.js and under the project root path
2. run `npm install`
3. run `npm run jsonServer`
4. can use `npm run killJsonServer` to kill server

Test in your local

200 OK `curl localhost:3000/200`

400 Client Error `curl localhost:3000/400`

500 Server Error `curl localhost:3000/500`

