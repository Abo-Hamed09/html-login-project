const user = localStorage.getItem("loggedInUser");

if (!user) {
  window.location.href = "index.html";
}

document.getElementById("welcome").innerText =
  "Welcome, " + user;

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
