import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    let currentTime=
  res.render("index.ejs",{currentTime:});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});