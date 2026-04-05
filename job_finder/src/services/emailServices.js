// src/services/emailService.js

function generateEmailHTML(jobs) {
  return `
    <h2>🔥 Your Personalized Job Matches</h2>
    ${jobs.map(job => `
      <div style="margin-bottom:15px;">
        <h3>${job.title}</h3>
        <p>Match: ${job.match}%</p>
        <a href="${job.link}">Apply Now</a>
      </div>
    `).join("")}
  `;
}