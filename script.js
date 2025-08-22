// Handle Login
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // ✅ Simple check (you can replace with database later)
      if (username && password) {
        localStorage.setItem("loggedUser", username);
        window.location.href = "dashboard.html";
      } else {
        alert("Please enter username & password");
      }
    });
  }

  // Show username on dashboard
  const userNameElement = document.getElementById("userName");
  if (userNameElement) {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      userNameElement.textContent = "Welcome, " + loggedUser;
    }
  }
});

// Sidebar content change
function showContent(type) {
  const content = document.getElementById("content");
  if (!content) return;

  if (type === "dashboard") {
    content.innerHTML = `
      <h2>Dashboard</h2>
      <div class="cards">
        <div class="card">Pending complaints</div>
        <div class="card">In progress complaints</div>
        <div class="card">Completed complaints</div>
      </div>`;
  } else if (type === "complaint") {
    content.innerHTML = `
      <h2>Complaint</h2>
      <p>Here you can submit a new complaint.</p>
      <form>
        <input type="text" placeholder="Complaint Title" required><br><br>
        <textarea placeholder="Complaint Details" required></textarea><br><br>
        <button type="submit">Submit</button>
      </form>`;
  } else if (type === "info") {
    content.innerHTML = `
      <h2>Personal Info</h2>
      <p>This is your personal information page.</p>`;
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}






