document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('authMessage');
  
  message.style.display = 'block'; 

  if (email === '' || !email.includes('@') || password === '') {
    message.textContent = "Please enter a valid email and password.";
    message.className = 'auth-message auth-fail';
    return; 
  }

  if (email === "sabareesh@gmail.com" && password === "Sabareesh123") {
    message.textContent = "Login Success";
    message.className = 'auth-message auth-success';
  } else {
    message.textContent = "Invalid Credentials";
    message.className = 'auth-message auth-fail';
  }
});