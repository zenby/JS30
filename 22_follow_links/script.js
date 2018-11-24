const links = document.querySelectorAll('a.link');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);


function highLightLink() {
  const margin = 5;
  const { width, height, top, left } = this.getBoundingClientRect();

  highlight.style.width = `${width + 2 * margin}px`;
  highlight.style.height = `${height + 2 * margin}px`;
  highlight.style.transform = `translate(${left + window.scrollX - margin}px, ${top + window.scrollY - margin}px)`;
}

links.forEach(link => link.addEventListener('mouseenter', highLightLink));
