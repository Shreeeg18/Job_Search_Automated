// src/jobs/internshala.js
const axios = require("axios");
const cheerio = require("cheerio");

async function fetchInternshalaJobs() {
  const url = "https://internshala.com/internships/web-development-internship/";
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);
  const jobs = [];

  $(".individual_internship").each((i, el) => {
    const title = $(el).find(".profile").text().trim();
    const link = "https://internshala.com" + $(el).find("a").attr("href");

    jobs.push({ title, link, description: title });
  });

  return jobs;
}

module.exports = fetchInternshalaJobs;