import { createServer } from "node:http";

// export const server = …
const server = createServer((req, res) => {
  console.log("Hello Server!");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Hello,geoerg!");
  }
});

export { server };
