let modal = document.getElementById('modal');
let btn = document.getElementById('btn');

// open modal box
function openModal() {
  modal.style.display = 'block';
  btn.style.display = 'none';

  let top = 0;

  let interval = setInterval(() => {
    top++;
    modal.style.top = `${top}px`;
  }, 0);

  setTimeout(() => {
    clearInterval(interval);
  }, 500);

}

// close modal box
function closeModal() {
  modal.style.display = 'none';
  btn.style.display = 'block';
}

// close modal box when pressing Escape key
document.onkeydown = function (evt) {
  if (evt.key == 'Escape') {
    closeModal();
  }
}