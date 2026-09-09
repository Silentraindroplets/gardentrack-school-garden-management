const demoGardenData = {
  students: ['Juan Dela Cruz', 'Maria Santos', 'Ana Reyes', 'Pedro Garcia'],
  plots: ['A-12', 'A-14', 'B-02', 'B-06'],
  observations: [
    { date: 'Aug. 28, 2026', plot: 'A-12', student: 'Juan Dela Cruz' },
    { date: 'Aug. 27, 2026', plot: 'A-14', student: 'Maria Santos' },
    { date: 'Aug. 26, 2026', plot: 'B-02', student: 'Ana Reyes' },
    { date: 'Aug. 25, 2026', plot: 'B-06', student: 'Pedro Garcia' },
  ],
  studentLogs: [
    { date: 'August 28, 2026', title: 'Healthy tomato growth' },
    { date: 'August 24, 2026', title: 'Strong sunlight throughout the day' },
    { date: 'August 20, 2026', title: 'Leaves needed attention' },
  ],
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function updateAdminDashboard() {
  setText('[data-stat="students"]', demoGardenData.students.length);
  setText('[data-stat="plots"]', demoGardenData.plots.length);
  setText('[data-stat="observations"]', demoGardenData.observations.length);
}

function updateStudentDashboard() {
  setText('[data-stat="last-observation"]', demoGardenData.studentLogs[0].date);
  setText('[data-stat="submitted-observations"]', demoGardenData.studentLogs.length);
}

function updateDashboard() {
  if (document.querySelector('[data-stat="students"]')) updateAdminDashboard();
  if (document.querySelector('[data-stat="submitted-observations"]')) updateStudentDashboard();

  const currentUser = localStorage.getItem('gardenTrackerCurrentUser');
  let accounts = [];
  try {
    accounts = JSON.parse(localStorage.getItem('gardenTrackerAccounts') || '[]');
  } catch (error) {
    accounts = [];
  }
  const currentAccount = accounts.find((account) => account.username === currentUser);
  const displayName = currentAccount?.fullName || currentUser;

  if (currentUser) {
    document.querySelectorAll('[data-username]').forEach((element) => {
      element.textContent = displayName;
    });
    document.querySelectorAll('[data-username-initial]').forEach((element) => {
      element.textContent = currentUser.charAt(0).toUpperCase();
    });
  }
}

updateDashboard();
