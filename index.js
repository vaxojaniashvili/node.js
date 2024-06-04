import http from "http";
import url from "url";
const data = [
  {
    id: 1,
    name: "vaxo",
    email: "vaxo@gmail.com",
    password: "123456",
  }
];

const request = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  if (method === "POST") {
    let body = "";
    req.on("end", () => {
      const { id, name, email, password } = JSON.parse(body);
      const newUser = { id, name, email, password, created };
      data.push(newUser);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
    });
  } else if (parsedUrl.pathname === "/api/users" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Please route /api/users");
  }
};

const server = http.createServer(request);
const host = 3001;

server.listen(host, () => {
  console.log(`Localhost is ${host}`);
});
