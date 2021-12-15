const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

const { exec } = require("child_process");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get(`/api/oracle`, (req, res) => {
    console.log("get request made");
    exec(
        `yarn gen quotes ./my-quotes-model/model.json \
    --genLength 40 \
    --temperature 0.5`,
        { cwd: "text-generator" },
        (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);

            let result = stdout;
            result = result.substring(214, 254);

            console.log(result);

            res.json(result);
        }
    );
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
