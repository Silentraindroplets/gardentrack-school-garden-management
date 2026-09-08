const accountsStorageKey = 'gardenTrackerAccounts';
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

function getAccounts() {
  try {
    const storedAccounts = JSON.parse(localStorage.getItem(accountsStorageKey));
    return Array.isArray(storedAccounts) ? storedAccounts : [];
  } catch (error) {
    return [];
  }
}

function saveAccount(account) {
  const accounts = getAccounts();
  const usernameExists = accounts.some(
    (existingAccount) => existingAccount.username.toLowerCase() === account.username.toLowerCase()
  );

  if (usernameExists) return false;

  accounts.push(account);
  localStorage.setItem(accountsStorageKey, JSON.stringify(accounts));
  return true;
}

function validateCredentials(username, password) {
  const normalizedUser = username.trim();
  const normalizedPass = password.trim();

  if (!normalizedUser || !normalizedPass) {
    return { valid: false, message: 'Please enter both username and password.' };
  }

  const selectedAccount = getAccounts().find(
    (account) =>
      account.username.toLowerCase() === normalizedUser.toLowerCase() &&
      account.password === normalizedPass
  );

  if (!selectedAccount) {
    return { valid: false, message: 'Invalid username or password.' };
  }

  return { valid: true, redirect: selectedAccount.redirect };
}

function registerAccount({ username, fullName, password, confirmPassword, role, redirect, messageElement }) {
  if (!username || !fullName || !password || !confirmPassword) {
    setMessage(messageElement, 'Please complete all registration fields.', false);
    return;
  }

  if (password.length < 6) {
    setMessage(messageElement, 'Password must be at least 6 characters long.', false);
    return;
  }

  if (password !== confirmPassword) {
    setMessage(messageElement, 'Passwords do not match. Please try again.', false);
    return;
  }

  const saved = saveAccount({ username, fullName, password, role, redirect });
  if (!saved) {
    setMessage(messageElement, 'That ID is already registered. Please use a different ID.', false);
    return;
  }

  setMessage(messageElement, `${role} account created successfully. Redirecting to login...`, true);
  setTimeout(() => {
    window.location.href = '../index.html';
  }, 600);
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

    registerAccount({
      username: document.getElementById('student-id')?.value?.trim() ?? '',
      fullName: document.getElementById('fullname')?.value?.trim() ?? '',
      password: document.getElementById('password')?.value?.trim() ?? '',
      confirmPassword: document.getElementById('confirm-password')?.value?.trim() ?? '',
      role: 'Student',
      redirect: 'student/student_dashboard.html',
      messageElement: signupMessage,
    });
  });
}

if (adminSignupForm) {
  adminSignupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    registerAccount({
      username: document.getElementById('admin-id')?.value?.trim() ?? '',
      fullName: document.getElementById('admin-name')?.value?.trim() ?? '',
      password: document.getElementById('admin-password')?.value?.trim() ?? '',
      confirmPassword: document.getElementById('admin-confirm-password')?.value?.trim() ?? '',
      role: 'Admin',
      redirect: 'admin/admin_dashboard.html',
      messageElement: adminSignupMessage,
    });
  });
}
