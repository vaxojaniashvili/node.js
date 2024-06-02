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

  if (parsedUrl.pathname === "/api/auth/signup" && method === "POST") {
    let body = "";

    req.on("end", () => {
      const { id, name, email, password } = JSON.parse(body);

      if (!id || !name || !email || !password) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("All fields are required.");
      }

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
    res.end("Not Found");
  }
};

const server = http.createServer(request);
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
