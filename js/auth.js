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
const adminSignupForm = document.getElementById('adminSignupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');
const adminSignupMessage = document.getElementById('adminSignupMessage');

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
    const studentId = document.getElementById('student-id')?.value?.trim() ?? '';
    const password = document.getElementById('password')?.value?.trim() ?? '';
    const confirmPassword = document.getElementById('confirm-password')?.value?.trim() ?? '';

    if (!fullName || !studentId || !password || !confirmPassword) {
      setMessage(signupMessage, 'Please complete all student registration fields.', false);
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

    setMessage(signupMessage, 'Student account created successfully. Redirecting to login...', true);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 600);
  });
}

if (adminSignupForm) {
  adminSignupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const adminId = document.getElementById('admin-id')?.value?.trim() ?? '';
    const adminName = document.getElementById('admin-name')?.value?.trim() ?? '';
    const password = document.getElementById('admin-password')?.value?.trim() ?? '';
    const confirmPassword = document.getElementById('admin-confirm-password')?.value?.trim() ?? '';
    if (!adminId || !adminName || !password || !confirmPassword) {
      setMessage(adminSignupMessage, 'Please complete all admin registration fields.', false);
      return;
    }
    if (password.length < 6) {
      setMessage(adminSignupMessage, 'Password must be at least 6 characters long.', false);
      return;
    }
    if (password !== confirmPassword) {
      setMessage(adminSignupMessage, 'Passwords do not match. Please try again.', false);
      return;
    }
    setMessage(adminSignupMessage, 'Admin account created successfully. Redirecting to login...', true);
    setTimeout(() => { window.location.href = 'index.html'; }, 600);
  });
}
