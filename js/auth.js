const demoUsers = {
  student: {
    username: 'student',
    password: 'student123',
    redirect: 'student/student_dashboard.html',
  },
  admin: {
    username: 'admin',
    password: 'admin123',
    redirect: 'admin/admin_dashboard.html',
  },
};

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');

function setMessage(element, message, isSuccess = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle('success', isSuccess);
}

function validateCredentials(username, password) {
  const normalizedUser = username.trim();
  const normalizedPass = password.trim();

  if (!normalizedUser || !normalizedPass) {
    return { valid: false, message: 'Please enter both username and password.' };
  }

  const selectedUser = Object.values(demoUsers).find(
    (user) => user.username === normalizedUser && user.password === normalizedPass
  );

  if (!selectedUser) {
    return {
      valid: false,
      message: 'Invalid username or password. Use the demo account details.',
    };
  }

  return { valid: true, redirect: selectedUser.redirect };
}

if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username')?.value ?? '';
    const password = document.getElementById('password')?.value ?? '';
    const result = validateCredentials(username, password);

    if (!result.valid) {
      setMessage(loginMessage, result.message, false);
      return;
    }

    setMessage(loginMessage, 'Login successful. Redirecting...', true);
    window.location.href = result.redirect;
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullname')?.value?.trim() ?? '';
    const email = document.getElementById('email')?.value?.trim() ?? '';
    const password = document.getElementById('password')?.value?.trim() ?? '';
    const confirmPassword = document.getElementById('confirm-password')?.value?.trim() ?? '';

    if (!fullName || !email || !password || !confirmPassword) {
      setMessage(signupMessage, 'Please complete all sign-up fields.', false);
      return;
    }

    if (password.length < 6) {
      setMessage(signupMessage, 'Password must be at least 6 characters long.', false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage(signupMessage, 'Passwords do not match. Please try again.', false);
      return;
    }

    setMessage(signupMessage, 'Account created successfully. Redirecting to login...', true);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 600);
  });
}
