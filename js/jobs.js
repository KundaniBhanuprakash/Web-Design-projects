let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let jobList = document.getElementById("jobList");

jobs.forEach((job, index) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h4>${job.title}</h4>
    <p>${job.company} - ${job.location}</p>
    <button onclick="apply(${index})">Apply</button>
  `;
  jobList.appendChild(div);
});

function apply(index) {
  alert("Applied for " + jobs[index].title);
}
