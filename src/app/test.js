import fs from 'file-system';

export function readFile(){
    console.log("\n *STARTING* \n");
    return fs.readFileSync("example_file", "utf8");
}

export function writeFile() {
    fs.appendFile("example_file.txt", "World", (err) => {
        if (err) {
          console.log(err);
        }
        else {
          // Get the file contents after the append operation
          console.log("\nFile Contents of file after append:",
            fs.readFileSync("example_file.txt", "utf8"));
        }
  });
}