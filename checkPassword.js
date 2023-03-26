function checkPassword() {
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('feedback');
  
  // Check password strength
  if (password.length < 8) {
    feedback.innerHTML = 'Password is too short';
  } else if (!/[a-z]/.test(password)) {
    feedback.innerHTML = 'Password must contain at least one lowercase letter';
  } else if (!/[A-Z]/.test(password)) {
    feedback.innerHTML = 'Password must contain at least one uppercase letter';
  } else if (!/\d/.test(password)) {
    feedback.innerHTML = 'Password must contain at least one digit';
  } else {
    feedback.innerHTML = 'Password is strong!';
  }
}
