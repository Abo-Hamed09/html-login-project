// Register new user
function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(user => user.username === username)) {
    alert("User already exists");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully");
  window.location.href = "index.html";
}

// Login user
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    user => user.username === username && user.password === password
  );

  if (!user) {
    alert("Invalid username or password");
    return;
  }

  localStorage.setItem("loggedInUser", username);
  window.location.href = "dashboard.html";
}
