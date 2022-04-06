const fs = require("fs");

function createOs(data) {
  fs.writeFileSync("./info.json", JSON.stringify(data));
}

createOs({
  name: "Macbook",
  series: "Macbook Air",
  year: "2020",
  version: "MacOS Moneterey",
});
