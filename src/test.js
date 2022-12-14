const writeFileP = require("write-file-p");

writeFileP(`dataLogin.txt`, "Hello Worsdld", (err, data) => {
  console.log(err || data);
});
