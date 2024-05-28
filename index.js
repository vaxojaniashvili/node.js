const fs = require("fs/promises");

const writeFile = async (note) => {
  try {
    fs.writeFile("notes.txt", note);
    console.log(note);
  } catch (error) {
    console.log(error);
  }
};

writeFile("corrected code");