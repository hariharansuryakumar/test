const express = require("express");

const bodyParser = require("body-parser");

const fs = require("fs-extra");

const path = require("path");

const app = express();

const PORT = 3000;

const folderPath = path.join(__dirname, "Texts");

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

function getFormmatedFileName() {
  return new Date().toISOString().replace(/:/g, "-");
}

//endpoint to create a file
app.post("/createFile", async (req, res) => {
  try {
    await fs.ensureDir(folderPath);

    // const time = new Date().toISOString();

    const fileName = `${getFormmatedFileName()}.txt`;

    const filePath = path.join(folderPath, fileName);

    await fs.writeFile(filePath, getFormmatedFileName());

    res.send("File created successfully");
  } catch (error) {
    res.status(500).send(`Error while writing the file -`, error);
  }
});

//endpoint to get all file names
app.get("/getFiles", async (req, res) => {
  try {
    await fs.ensureDir(folderPath);
    const files = fs.readdir(folderPath);
    const textFiles = (await files).filter((file) => file.endsWith(".txt"));
    res.json(textFiles);
  } catch (error) {
    res.status(500).send(`Error while reading the file -`, error);
  }
});

//welcome endpoint
app.get("/", (req, res) => {
  console.log("Hiii");
  res.send(`Welcome to Node.js`);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});