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

// const readFile = async () => {
//   try {
//     fs.readFile("notes.txt", "utf-8")
//       .then((res) => console.log(res))
//       .catch((rej) => {
//         console.log(rej);
//       });
//   } catch (error) {
//     console.log("Error", error);
//   }
// };
// readFile();

