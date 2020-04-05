// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
  createButton(modal);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function createButton(modal) {
  const btn = document.createElement('BUTTON');
  btn.className = 'btn';
  btn.addEventListener('click', popup, false);
  const text = document.createTextNode('button trello');
  btn.appendChild(text);
  modal.appendChild(btn);
}

function popup() {
  alert('test');
}
