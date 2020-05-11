const triggers = document.querySelectorAll('a');

const hilite = document.createElement('span');
hilite.classList.add('highlight');
document.body.append(hilite);

function hiliteLink() {

  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  }

  hilite.style.width = `${coords.width}px`;
  hilite.style.height = `${coords.height}px`;
  hilite.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', hiliteLink));