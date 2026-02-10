function download() {
  const link = document.createElement("a");
  link.href = "./BadshaCV.pdf";
  link.download = "BadshaCV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function call() {
  const call = document.createElement("a");
  call.href = "tel:+8801986862697";
  call.call = "01986862697";
  document.body.appendChild(call);
  call.click();
  document.body.removeChild(call);
}

// Form Validation

const form = document.querySelector("#form");
const statusText = document.querySelector("#status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  if (!name || !email || !message) {
    statusText.textContent = "Please fill in the all fields.";
    statusText.style.color = "red";
    return;
  }
  if (!emailValidation(email)) {
    statusText.textContent = "Enter a valid email address.";
    statusText.style.color = "red";
    return;
  }
  statusText.textContent = "Sending...";
  statusText.style.color = "Black";

  setTimeout(() => {
    statusText.textContent = "Message sent successfully.";
    statusText.style.color = "green";
    form.reset();
  }, 1000);
});

function emailValidation(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
