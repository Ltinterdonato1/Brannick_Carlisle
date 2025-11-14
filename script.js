document.addEventListener("DOMContentLoaded", () => {
  // ===== REPLACE WITH YOUR EMAILJS IDs =====
  const SERVICE_ID = "service_7amg6ti";
  const TEMPLATE_ID = "template_xgtabnp";
  const PUBLIC_KEY = "OoaKizh3UM7gPJids";

  emailjs.init(PUBLIC_KEY);

  const form = document.getElementById("appointment-form");
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  // Mobile Menu Toggle
  document.getElementById("mobile-menu-button")?.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  // Form Submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    loading.classList.add("modal__overlay--visible");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this, PUBLIC_KEY)
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
        setTimeout(() => window.location.href = "thanks.html", 1500);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        loading.classList.remove("modal__overlay--visible");
        alert(`Failed to send. Please email: newlauren.94@gmail.com\n\nError: ${err.text || err}`);
      });
  });

  // Set min date for calendar
  const dateInput = document.getElementById("preferred_date");
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
});