const assignPlotModal = document.querySelector('[data-assign-plot-modal]');
const openAssignPlotButton = document.querySelector('[data-open-assign-plot]');
const closeAssignPlotButton = document.querySelector('[data-close-assign-plot]');
const assignPlotForm = document.querySelector('[data-assign-plot-form]');

function closeAssignPlotModal() {
  if (!assignPlotModal) return;

  assignPlotModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function openAssignPlotModal() {
  if (!assignPlotModal) return;

  assignPlotModal.hidden = false;
  document.body.classList.add('modal-open');
  document.getElementById('student')?.focus();
}

openAssignPlotButton?.addEventListener('click', openAssignPlotModal);
closeAssignPlotButton?.addEventListener('click', closeAssignPlotModal);

assignPlotModal?.addEventListener('click', (event) => {
  if (event.target === assignPlotModal) closeAssignPlotModal();
});

assignPlotForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  closeAssignPlotModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeAssignPlotModal();
});