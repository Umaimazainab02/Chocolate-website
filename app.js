// ===== Contact Form Validation =====
document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email address.");
      return;
    }

    alert("Message sent successfully! ✅");

    // sab fields clear kr do
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
});