import http from "node:http"
import fs from "node:fs"

const port = 9000;

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			console.log("index.html");
			break;
		case "/about":
			console.log("about.html");
			break;
		case "/contact":
			console.log("contact-me.html");
			break;
		default:
			console.log("404.html");
			break;
	}
});

server.listen(port);
