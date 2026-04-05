// src/services/matcher.js
const skills = [
  "node", "express", "mongodb",
  "javascript", "react", "backend"
];

function scoreJob(job) {
  let score = 0;
  const text = (job.title + job.description).toLowerCase();

  skills.forEach(skill => {
    if (text.includes(skill)) score += 1;
  });

  if (text.includes("remote") || text.includes("india")) score += 2;

  return score;
}

function filterJobs(jobs) {
  return jobs
    .map(job => ({ ...job, score: scoreJob(job) }))
    .filter(job => job.score >= 3)
    .sort((a, b) => b.score - a.score);
}

module.exports = { filterJobs };