const http = require("http");

const app = require("./app/app");

app.get("/test", (req, res) => res.end("working"));

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
