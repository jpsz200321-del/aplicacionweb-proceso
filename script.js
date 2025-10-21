// --- Selección de elementos ---
const loginBox = document.querySelector(".login-box");
const registerBox = document.querySelector(".register-box");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const imageContainer = document.getElementById("imageContainer");

// --- Imágenes de fondo ---
const loginImage =
  "https://i.pinimg.com/736x/5e/de/3e/5ede3e217202bf8053d6dfe342b63713.jpg";
const registerImage =
  "https://i.pinimg.com/736x/c7/bb/95/c7bb9577226aab1f8e014520f3c32df4.jpg";

// --- Imagen inicial ---
imageContainer.style.backgroundImage = `url(${loginImage})`;

// --- Función para cambiar imagen con efecto suave ---
function changeBackground(newImage) {
  imageContainer.classList.add("fade");
  setTimeout(() => {
    imageContainer.style.backgroundImage = `url(${newImage})`;
    imageContainer.classList.remove("fade");
  }, 400); // transición más perceptible y fluida
}

// --- Mostrar formulario de registro ---
showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginBox.classList.add("hidden");
  registerBox.classList.remove("hidden");
  changeBackground(registerImage);
});

// --- Volver al login ---
showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
  changeBackground(loginImage);
});

// --- Enviar al hacer clic en "Log In" ---
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "landing.html"; // redirige a landing
});

// --- Enviar al hacer clic en "Register" ---
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Mostrar alerta de confirmación
  alert("¡Registro exitoso!");

  // Asegurarse de volver al login
  registerBox.classList.add("hidden");
  loginBox.classList.remove("hidden");

  // Cambiar imagen al login
  changeBackground(loginImage);

  // Limpiar los campos del formulario de registro
  registerForm.reset();
});
