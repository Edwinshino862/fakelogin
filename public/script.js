document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const emailInput = form.querySelector("input[name='username']");
    const email = emailInput.value;

    if (!email.endsWith("@gmail.com")) {
      event.preventDefault(); // Stop form submission
      alert("Only Gmail addresses are allowed.");
    }
  });
});

