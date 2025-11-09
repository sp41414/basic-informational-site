const express = require('express')
const app = express();
const path = require('path')

const port = 9000;

app.get("/", (_, res) => {
	res.status(200).sendFile(path.join(__dirname, "src/", "index.html"), (err) => {
		if (err) return console.error(err)
		console.log("Loaded home page")
	})
})

app.get("/about", (_, res) => {
	res.status(200).sendFile(path.join(__dirname, "src/", "about.html"), (err) => {
		if (err) return console.error(err)
		console.log("Loaded about page")
	})
})

app.get("/contact", (_, res) => {
	res.status(200).sendFile(path.join(__dirname, "src/", "contact-me.html"), (err) => {
		if (err) return console.error(err)
		console.log("Loaded contact page")
	})
})

// apparently app.get doesnt work and app.use is the way for this...?
app.use((_, res) => {
	res.status(404).sendFile(path.join(__dirname, "src/", "404.html"), (err) => {
		if (err) return console.error(err)
		console.log("Loaded 404 page")
	})
})

app.listen(port, error => {
	if (error) throw error;
	console.log(`Successfully ran server on port ${port}`)
})
