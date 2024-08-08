const express = require("express");
const bodyParser = require ("body-parser");
const fs = require("fs-extra");
const path = require("path");
const app = express();

const PORT = 3000;
const folderPath = path.join (__dirname, "texts");

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}


app.post("/createFile",(req, res) =>{
    const time = new Date().toISOString().replace(/:/g, "-");
    const fileName = `${time}.txt`;
    const filePath = path.join(folderPath,fileName);

    fs.writeFile(filePath, time, (err) =>{
        if (err) {
            return res.status (400).send ("Error writing a file",err);
        }
        res.send("file created successfully");
    });
});
// Endpoint to retrieve all text files
app.get("/getFiles", async (req, res)=>{
    try {
        await fs.ensureDir(folderPath);
        const files = await fs.readdir(folderPath);
        const textFiles = files.filter((file)=> file.endsWith(".txt"));
        res.json(textFiles);
    } catch(error) {
        res.status(500).send("Error reading folder-", error);
    }
});

app.listen (PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
});

