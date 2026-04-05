const Job = require("../models/Job");

async function saveNewJobs(jobs) {
  const newJobs = [];

  for (let job of jobs) {
    const exists = await Job.findOne({ link: job.link });

    if (!exists) {
      const saved = await Job.create(job);
      newJobs.push(saved);
    }
  }

  return newJobs;
}