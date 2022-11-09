const accordionHeaders = document.querySelectorAll('[data-accordion-header]');
Array.prototype.forEach.call(accordionHeaders, (accordionHeader) => {
  let target = accordionHeader.parentElement.nextElementSibling;

  accordionHeader.onclick = () => {
    let expanded =
      accordionHeader.getAttribute('aria-expanded') === 'true' || false;
    accordionHeader.setAttribute('aria-expanded', !expanded);
    if (!expanded) {
      target.hidden = expanded;
      setTimeout(() => target.firstElementChild.classList.add('show'), 10);
    } else {
      target.firstElementChild.classList.remove('show');
      setTimeout(() => (target.hidden = expanded), 501);
    }
  };
});
