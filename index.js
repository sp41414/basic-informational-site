import http from "node:http"
import fs from "node:fs"

const port = 9000;

const server = http.createServer((req, res) => {
	let content;
	switch (req.url) {
		case "/":
			content = "./src/index.html"
			break;
		case "/about":
			content = "./src/about.html"
			break;
		case "/contact":
			content = "./src/contact-me.html"
			break;
		default:
			content = "./src/404.html"
			break;
	}

	fs.readFile(content, (err, data) => {
		if (err) return console.error(err)
		res.end(data)
	})
});

server.listen(port);
