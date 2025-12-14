const user = localStorage.getItem("loggedInUser");

if (!user) {
  window.location.href = "index.html";
}

document.getElementById("welcome").innerText =
  "Welcome, " + user;

// Sample mentor data
const mentors = [
  { name: "Ahmed", field: "Cybersecurity", email: "ahmed@pmu.edu.sa" },
  { name: "Saad", field: "Web Development", email: "Saad@pmu.edu.sa" },
  { name: "Omar", field: "Networking", email: "omar@pmu.edu.sa" }
];


function searchMentor() {
  const input = document.getElementById("mentorInput").value.toLowerCase();
  const result = document.getElementById("result");

  const mentor = mentors.find(
    m => m.name.toLowerCase() === input
  );

  if (!mentor) {
    result.innerText = "Mentor not found";
    return;
  }

  result.innerText =
    "Name: " + mentor.name +
    " | Field: " + mentor.field +
    " | Email: " + mentor.email;
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
