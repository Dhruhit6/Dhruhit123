import jsonfile from "jsonfile";
import moment from "moment";

const path = './data.json';
const date = moment().format();

const data = {
    date: date,
};

// Use top-level await (ES Modules) or writeFileSync so Node waits for the file to be written
await jsonfile.writeFile(path, data, { spaces: 2 });
console.log("Successfully wrote to data.json:", data);
