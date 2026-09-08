const username = localStorage.getItem('gardenTrackerCurrentUser');

if (username) {
  document.querySelectorAll('[data-username]').forEach((element) => {
    element.textContent = username;
  });

  document.querySelectorAll('[data-username-initial]').forEach((element) => {
    element.textContent = username.charAt(0).toUpperCase();
  });
}
