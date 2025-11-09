const { Router } = require("express");
const path = require("path");

const pageRouter = Router();

pageRouter.get("/", (_, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, "..", "index.html"), (err) => {
            if (err) return console.error(err);
            console.log("Loaded home page");
        });
});

pageRouter.get("/about", (_, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, "..", "about.html"), (err) => {
            if (err) return console.error(err);
            console.log("Loaded about page");
        });
});

pageRouter.get("/contact", (_, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, "..", "contact-me.html"), (err) => {
            if (err) return console.error(err);
            console.log("Loaded contact page");
        });
});

pageRouter.use((_, res) => {
    res.status(404).sendFile(path.join(__dirname, "..", "404.html"), (err) => {
        if (err) return console.error(err);
        console.log("Loaded 404 page");
    });
});

module.exports = pageRouter;
