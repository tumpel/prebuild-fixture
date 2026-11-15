const { writeFileSync } = require("node:fs");

writeFileSync("build/greeting.txt", `prebuilt at ${new Date().toISOString()}\n`);
console.log("wrote build/greeting.txt");
