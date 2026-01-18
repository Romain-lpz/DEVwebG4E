const passwordIcon = document.getElementById("passwordIcon");
const passwordInput = document.getElementById("password");

if (passwordIcon && passwordInput) {
  passwordIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.src = "images/eye-open.png";
      passwordIcon.alt = "Masquer le mot de passe";
    } else {
      passwordInput.type = "password";
      passwordIcon.src = "images/eye-close.png";
      passwordIcon.alt = "Afficher le mot de passe";
    }
  });
}

const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
      e.preventDefault();
      alert("Les mots de passe ne correspondent pas.");
      return false;
    }

    if (password.length < 8) {
      e.preventDefault();
      alert("Le mot de passe doit contenir au moins 8 caractères.");
      return false;
    }
  });
}
