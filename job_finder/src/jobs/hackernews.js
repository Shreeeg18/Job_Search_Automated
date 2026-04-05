// src/jobs/hackernews.js
const axios = require("axios");
const xml2js = require("xml2js");

async function fetchHNJobs() {
  const res = await axios.get("https://hnrss.org/jobs");
  const parser = new xml2js.Parser();
  const data = await parser.parseStringPromise(res.data);

  return data.rss.channel[0].item.map(job => ({
    title: job.title[0],
    link: job.link[0],
    description: job.description[0]
  }));
}

module.exports = fetchHNJobs;