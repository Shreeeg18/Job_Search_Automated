const connectDB = require("./config/db");

connectDB();
require("./scheduler/cron");

console.log("Job Finder Running...");