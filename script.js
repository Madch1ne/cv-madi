const printButton = document.querySelector('.print-action');

if (printButton) {
  printButton.addEventListener('click', () => window.print());
}
