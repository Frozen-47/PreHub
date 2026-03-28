document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const authMessage = document.getElementById('authMessage');

  emailInput.classList.remove('input-error');
  passwordInput.classList.remove('input-error');
  emailError.style.display = 'none';
  passwordError.style.display = 'none';
  authMessage.style.display = 'none';
  authMessage.className = 'auth-message'; 

  let isValid = true;
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailValue === '') {
    emailError.textContent = "Email cannot be empty";
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address";
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
    isValid = false;
  }

  if (passwordValue === '') {
    passwordError.textContent = "Password cannot be empty";
    passwordError.style.display = 'block';
    passwordInput.classList.add('input-error');
    isValid = false;
  }

  
  if (isValid) {

    const validEmail = "hello@gmail.com";
    const validPassword = "1221";

    authMessage.style.display = 'block';

    if (emailValue === validEmail && passwordValue === validPassword) {
      authMessage.textContent = "Login Success";
      authMessage.classList.add('auth-success');
    } else {
      authMessage.textContent = "Invalid Credentials";
      authMessage.classList.add('auth-fail');
    }
  }
});