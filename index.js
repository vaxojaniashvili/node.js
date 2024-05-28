const fs = require("fs/promises");

fs.writeFile("text.txt", "hello", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});
