let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let adminJobs = document.getElementById("adminJobs");

function addJob() {
  let job = {
    title: title.value,
    company: company.value,
    location: location.value
  };

  jobs.push(job);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  displayJobs();
}

function displayJobs() {
  adminJobs.innerHTML = "";
  jobs.forEach((job, i) => {
    adminJobs.innerHTML += `
      <p>${job.title} - ${job.company}
      <button onclick="deleteJob(${i})">Delete</button></p>
    `;
  });
}

function deleteJob(i) {
  jobs.splice(i, 1);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  displayJobs();
}

displayJobs();
